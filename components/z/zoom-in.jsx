import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qvoloac3r.css';
import '../../css/p/pi3y7acqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qvoloac3r"/><path class="pi3y7acqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:zoom-in"} {...others} />);
}

export default Component;
