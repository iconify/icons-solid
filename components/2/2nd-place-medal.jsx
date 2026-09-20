import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bantg8bja.css';
import '../../css/j/jhn3jobnr.css';
import '../../css/w/w0nvg6bfx.css';
import '../../css/a/aq8wdb2pi.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/r/rk100jb7k.css';
import '../../css/p/p_laet0jp.css';
import '../../css/n/ntc_yhbio.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bantg8bja"/><path class="jhn3jobnr"/><path class="w0nvg6bfx"/><circle class="aq8wdb2pi"/><g class="x8poo_bjf"><circle class="rk100jb7k"/><circle class="p_laet0jp"/><path class="ntc_yhbio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:2nd-place-medal"} {...others} />);
}

export default Component;
