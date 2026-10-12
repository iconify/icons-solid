import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4phrmqtm.css';
import '../../css/g/gqbkeib9d.css';
import '../../css/i/iqalpebha.css';
import '../../css/h/hbgs8ogrd.css';
import '../../css/e/e8gpcnb-c.css';
import '../../css/r/r6vo3mk8c.css';
import '../../css/r/rim7ucc9o.css';
import '../../css/y/y6tauceqc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="c4phrmqtm"/><circle class="gqbkeib9d"/><circle transform="rotate(-75 19.22 5.55)" class="iqalpebha"/><path class="hbgs8ogrd"/><circle class="e8gpcnb-c"/><circle class="r6vo3mk8c"/><circle transform="rotate(-75 19.22 5.55)" class="rim7ucc9o"/><path class="y6tauceqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:git-graph"} {...others} />);
}

export default Component;
