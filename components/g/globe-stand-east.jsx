import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hph-hdb6r.css';
import '../../css/s/sk475u2ut.css';
import '../../css/d/dth2xsb7w.css';
import '../../css/x/x3sxpnbgb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="hph-hdb6r"/><path class="sk475u2ut"/><path class="dth2xsb7w"/><path class="x3sxpnbgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-east"} {...others} />);
}

export default Component;
