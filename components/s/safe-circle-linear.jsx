import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z-3-7paba.css';
import '../../css/x/xng-4w08c.css';
import '../../css/u/ul2finbnj.css';
import '../../css/a/a2-o1jt_u.css';
import '../../css/d/d6cn3zbnj.css';
import '../../css/f/fmc_3temv.css';
import '../../css/a/avgpambcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="z-3-7paba"/><path class="xng-4w08c"/><path class="ul2finbnj"/><path class="a2-o1jt_u"/><path class="d6cn3zbnj"/><path class="fmc_3temv"/><path class="avgpambcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-circle-linear"} {...others} />);
}

export default Component;
