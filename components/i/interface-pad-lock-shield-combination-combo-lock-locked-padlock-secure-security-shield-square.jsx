import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zqgxwn5df.css';
import '../../css/s/sv77y4qyo.css';
import '../../css/s/sj01gro5t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zqgxwn5df"/><rect class="sv77y4qyo"/><path class="sj01gro5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-pad-lock-shield-combination-combo-lock-locked-padlock-secure-security-shield-square"} {...others} />);
}

export default Component;
