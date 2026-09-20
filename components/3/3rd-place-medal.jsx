import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya8u5iv6o.css';
import '../../css/a/a6p41zijm.css';
import '../../css/j/jhn3jobnr.css';
import '../../css/w/w0nvg6bfx.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/t/t9mvgybsl.css';
import '../../css/t/tpfdcfgic.css';
import '../../css/m/mxze8ab6q.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ya8u5iv6o"/><circle class="a6p41zijm"/><path class="jhn3jobnr"/><path class="w0nvg6bfx"/><g class="x8poo_bjf"><circle class="t9mvgybsl"/><circle class="tpfdcfgic"/><path class="mxze8ab6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:3rd-place-medal"} {...others} />);
}

export default Component;
