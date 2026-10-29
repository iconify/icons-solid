import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/eque-cb0l.css';
import '../../css/u/u13jz96nf.css';
import '../../css/f/fywzvr1fl.css';
import '../../css/q/qegogjbre.css';
import '../../css/o/ov3mdc9gc.css';
import '../../css/g/gz3kls-hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="eque-cb0l wm-shadow"/><path class="u13jz96nf"/><path class="fywzvr1fl"/><path class="qegogjbre"/><path class="ov3mdc9gc wm-shine"/><path class="gz3kls-hq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:power"} {...others} />);
}

export default Component;
