import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d4gr4b-ew.css';
import '../../css/s/snfqaybzw.css';
import '../../css/d/d-ig5rb5w.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/i/i9rgmobgb.css';
import '../../css/v/vaz7yyb5d.css';
import '../../css/j/jer849uee.css';
import '../../css/f/fah8pdbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d4gr4b-ew"/><path class="snfqaybzw"/><path class="d-ig5rb5w wm-shine"/><path class="hooc3vbcx wm-k"/><path class="i9rgmobgb wm-a"/><path class="vaz7yyb5d"/><path class="jer849uee"/><path class="fah8pdbsy wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:badge-alert"} {...others} />);
}

export default Component;
