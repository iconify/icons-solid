import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sw2wszxbb.css';
import '../../css/n/np4l_rbmm.css';
import '../../css/r/rw82l7faj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sw2wszxbb"/><path class="np4l_rbmm"/><path class="rw82l7faj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:workflow-square-10"} {...others} />);
}

export default Component;
