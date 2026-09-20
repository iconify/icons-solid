import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yotllrbun.css';
import '../../css/e/egwjolbfe.css';
import '../../css/u/utq6tewvn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yotllrbun"/><circle class="egwjolbfe"/><path class="utq6tewvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-lock-shield-combination-combo-lock-locked-padlock-secure-security-shield-keyhole"} {...others} />);
}

export default Component;
