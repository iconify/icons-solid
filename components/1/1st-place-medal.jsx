import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xhl4csb8p.css';
import '../../css/j/jhn3jobnr.css';
import '../../css/w/w0nvg6bfx.css';
import '../../css/q/q0u3pfb-g.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/r/rk100jb7k.css';
import '../../css/p/p_laet0jp.css';
import '../../css/h/hq1w7nyrj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xhl4csb8p"/><path class="jhn3jobnr"/><path class="w0nvg6bfx"/><circle class="q0u3pfb-g"/><g class="x8poo_bjf"><circle class="rk100jb7k"/><circle class="p_laet0jp"/><path class="hq1w7nyrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:1st-place-medal"} {...others} />);
}

export default Component;
