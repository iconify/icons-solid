import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5ebr9bjc.css';
import '../../css/u/ufscmvy2b.css';
import '../../css/v/vslp_-0hv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p5ebr9bjc"/><path class="ufscmvy2b"/><path class="vslp_-0hv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-refuelling-48"} {...others} />);
}

export default Component;
