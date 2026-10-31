import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jh-d33clr.css';
import '../../css/v/vyc1kumxm.css';
import '../../css/c/ckhh_eblo.css';
import '../../css/d/d39voozum.css';
import '../../css/g/gumuz4irq.css';
import '../../css/n/ns0e54b6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jh-d33clr wm-shadow"/><path class="vyc1kumxm"/><path class="ckhh_eblo"/><path class="d39voozum"/><path class="gumuz4irq"/><path class="ns0e54b6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:kanban"} {...others} />);
}

export default Component;
