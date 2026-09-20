import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysv057b-z.css';
import '../../css/d/dnsn47b2x.css';
import '../../css/i/iuv2rsb_l.css';
import '../../css/i/i5ty4t3jd.css';
import '../../css/d/dh0nbubnx.css';
import '../../css/e/ehhyqmbxe.css';

const viewBox = {"width":390,"height":47};
const content = `<path class="ysv057b-z"/><path class="dnsn47b2x"/><path class="iuv2rsb_l"/><path class="i5ty4t3jd"/><path clip-rule="evenodd" class="dh0nbubnx"/><path class="ehhyqmbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:usps"} {...others} />);
}

export default Component;
