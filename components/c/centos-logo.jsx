import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e8630-79j.css';
import '../../css/k/k0x96db0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="e8630-79j"/><path class="k0x96db0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:centos-logo"} {...others} />);
}

export default Component;
