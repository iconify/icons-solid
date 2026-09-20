import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuqfpcnzl.css';
import '../../css/t/t_qegy7zv.css';
import '../../css/f/f80mbrbed.css';
import '../../css/j/jf0tcpneg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/p/pjai00bft.css';
import '../../css/y/y6_17kbeg.css';
import '../../css/f/fjva3acxj.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yuqfpcnzl"/><path class="t_qegy7zv"/><path class="f80mbrbed"/><path class="jf0tcpneg"/><g class="ij2x_72vy"><path class="pjai00bft"/><path class="y6_17kbeg"/><path class="fjva3acxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:newspaper"} {...others} />);
}

export default Component;
