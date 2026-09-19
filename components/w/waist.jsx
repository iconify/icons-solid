import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s1w0zeb-q.css';
import '../../css/c/cygklwmuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s1w0zeb-q"/><path class="cygklwmuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:waist"} {...others} />);
}

export default Component;
