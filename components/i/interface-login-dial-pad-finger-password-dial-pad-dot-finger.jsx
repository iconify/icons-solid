import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/anqgscbxq.css';
import '../../css/r/r-u8uzl-j.css';
import '../../css/f/fsm9tcbad.css';
import '../../css/h/hrnv4acdh.css';
import '../../css/u/ucekheeil.css';
import '../../css/d/d9zclwbse.css';
import '../../css/s/s960n0b-a.css';
import '../../css/y/y5fionzfz.css';
import '../../css/b/b16w3b5uv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="anqgscbxq"/><circle class="r-u8uzl-j"/><circle class="fsm9tcbad"/><circle class="hrnv4acdh"/><circle class="ucekheeil"/><circle class="d9zclwbse"/><circle class="s960n0b-a"/><circle class="y5fionzfz"/><path class="b16w3b5uv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-login-dial-pad-finger-password-dial-pad-dot-finger"} {...others} />);
}

export default Component;
