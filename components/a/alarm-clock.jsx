import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kspdypjpc.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/ktwa2ce4v.css';
import '../../css/x/xh5h3n1ua.css';
import '../../css/w/wbo2jjbxx.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jhit5kb0t.css';
import '../../css/l/l-ya46lcl.css';
import '../../css/n/ndrinl-ke.css';
import '../../css/b/b37acw9za.css';
import '../../css/a/azhlm2bcn.css';
import '../../css/i/iifqig7rj.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGF7nnVdPl" class="kspdypjpc"/></defs><g class="t_2lkqbxb"><path class="ktwa2ce4v wm-shadow"/><path class="xh5h3n1ua"/><path class="wbo2jjbxx"/><use href="#SVGF7nnVdPl" class="d2kvgvbvc"/><path class="jhit5kb0t"/><use href="#SVGF7nnVdPl" class="d2kvgvbvc"/><path class="l-ya46lcl"/><path class="ndrinl-ke"/><path class="b37acw9za wm-shine"/><path class="azhlm2bcn wm-deco"/><path class="iifqig7rj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:alarm-clock"} {...others} />);
}

export default Component;
