import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xwb44uomz.css';
import '../../css/u/u5mc0lbal.css';
import '../../css/z/zxv6q_k0p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="xwb44uomz"/><path class="u5mc0lbal"/><path class="zxv6q_k0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-wayfinder-man-arm-raises-2-man-raise-arm-scaning-detect-posture-security"} {...others} />);
}

export default Component;
