import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e2i4-bbgv.css';
import '../../css/p/pi3y7acqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e2i4-bbgv"/><path class="pi3y7acqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:zoom-out"} {...others} />);
}

export default Component;
