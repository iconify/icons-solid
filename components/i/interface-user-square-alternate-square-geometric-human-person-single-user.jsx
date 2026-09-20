import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f9bv6mbbv.css';
import '../../css/i/iy-ryi24k.css';
import '../../css/y/yph-txb3i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="f9bv6mbbv"/><path class="iy-ryi24k"/><rect class="yph-txb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-user-square-alternate-square-geometric-human-person-single-user"} {...others} />);
}

export default Component;
