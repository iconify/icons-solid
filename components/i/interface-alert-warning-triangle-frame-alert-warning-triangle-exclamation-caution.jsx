import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xr_3yjbwe.css';
import '../../css/s/sv39nxb-k.css';
import '../../css/c/csarx2iyb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="xr_3yjbwe"/><circle class="sv39nxb-k"/><path class="csarx2iyb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-alert-warning-triangle-frame-alert-warning-triangle-exclamation-caution"} {...others} />);
}

export default Component;
