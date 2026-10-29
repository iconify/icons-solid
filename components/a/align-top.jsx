import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m-gav7big.css';
import '../../css/x/x5ul2cbrw.css';
import '../../css/m/mv3sw0gyu.css';
import '../../css/y/yapakfb5y.css';
import '../../css/g/grfhruy1q.css';
import '../../css/k/k-y4ggola.css';
import '../../css/v/vqo6zlb2e.css';
import '../../css/c/c9bmx3iml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="m-gav7big wm-shadow"/><path class="x5ul2cbrw"/><path class="mv3sw0gyu"/><path class="yapakfb5y"/><path class="grfhruy1q"/><path class="k-y4ggola"/><path class="vqo6zlb2e wm-shine"/><path class="c9bmx3iml wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:align-top"} {...others} />);
}

export default Component;
