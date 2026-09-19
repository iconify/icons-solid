import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vlny-5bhv.css';
import '../../css/h/hj2v57bvh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vlny-5bhv"/><path class="hj2v57bvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:octagon-alert"} {...others} />);
}

export default Component;
