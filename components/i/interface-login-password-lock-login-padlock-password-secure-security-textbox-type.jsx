import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v97dtybos.css';
import '../../css/o/ovu9dzm8y.css';
import '../../css/k/k7mij8x_k.css';
import '../../css/a/aqw6qqcvy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="v97dtybos"/><circle class="ovu9dzm8y"/><circle class="k7mij8x_k"/><path class="aqw6qqcvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-login-password-lock-login-padlock-password-secure-security-textbox-type"} {...others} />);
}

export default Component;
