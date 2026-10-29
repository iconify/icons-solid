import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5pqmi1kx.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/z/z41ziacxn.css';
import '../../css/w/w3u2c093r.css';
import '../../css/y/y3amg1-kx.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yf-1-ybgo.css';
import '../../css/x/xxgbdubcs.css';
import '../../css/j/j9opsguui.css';
import '../../css/c/cz2-zytlw.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGcdyMuA7f" class="b5pqmi1kx"/></defs><g class="t_2lkqbxb"><path class="wm-shadow z41ziacxn"/><path class="w3u2c093r"/><path class="y3amg1-kx"/><use href="#SVGcdyMuA7f" class="d2kvgvbvc"/><path class="yf-1-ybgo"/><use href="#SVGcdyMuA7f" class="d2kvgvbvc"/><path class="xxgbdubcs"/><path class="j9opsguui wm-shine"/><path class="cz2-zytlw wm-deco"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:coffee"} {...others} />);
}

export default Component;
