import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/md5f0q23v.css';
import '../../css/n/nery-1b5l.css';
import '../../css/n/n-ig4db4i.css';
import '../../css/o/ori-ejvgu.css';
import '../../css/w/wy8jpobou.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/t/t9mvgybsl.css';
import '../../css/t/tpfdcfgic.css';
import '../../css/s/st4ssv5dg.css';
import '../../css/q/q0nqg6bge.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="md5f0q23v"/><path class="nery-1b5l"/><path class="n-ig4db4i"/><circle class="ori-ejvgu"/><path class="wy8jpobou"/><g class="x8poo_bjf"><circle class="t9mvgybsl"/><circle class="tpfdcfgic"/><circle class="t9mvgybsl"/><path class="st4ssv5dg"/><circle class="t9mvgybsl"/><path class="q0nqg6bge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sports-medal"} {...others} />);
}

export default Component;
