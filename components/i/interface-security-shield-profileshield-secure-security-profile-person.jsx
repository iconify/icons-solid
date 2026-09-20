import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zqgxwn5df.css';
import '../../css/f/f9bv6mbbv.css';
import '../../css/m/mt1nnt_ai.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zqgxwn5df"/><circle class="f9bv6mbbv"/><path class="mt1nnt_ai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-security-shield-profileshield-secure-security-profile-person"} {...others} />);
}

export default Component;
