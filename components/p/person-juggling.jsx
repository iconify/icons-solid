import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suog2cc7x.css';
import '../../css/u/uzo22_39n.css';
import '../../css/e/e2ku7qbqg.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/u/u47tk0z_p.css';
import '../../css/q/qysm0kgfc.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/j/j4ctd4i0s.css';
import '../../css/h/h-1no5hzq.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="suog2cc7x"/><circle class="uzo22_39n"/><circle class="e2ku7qbqg"/><g class="x4u8pbwjc"><circle class="u47tk0z_p"/><path class="qysm0kgfc"/></g><g class="x8poo_bjf"><circle class="u47tk0z_p"/><path class="j4ctd4i0s"/><path class="h-1no5hzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-juggling"} {...others} />);
}

export default Component;
