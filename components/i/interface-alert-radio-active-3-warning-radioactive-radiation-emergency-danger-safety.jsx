import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/ckzlk1div.css';
import '../../css/v/vfyub0bsb.css';
import '../../css/g/g2qk9bbka.css';
import '../../css/m/mal0xkp4e.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="ckzlk1div"/><path class="vfyub0bsb"/><path class="g2qk9bbka"/><path class="mal0xkp4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-alert-radio-active-3-warning-radioactive-radiation-emergency-danger-safety"} {...others} />);
}

export default Component;
