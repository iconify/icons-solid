import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/d0v5wbc9f.css';
import '../../css/n/n3owmwb5r.css';
import '../../css/l/l7-lc22cw.css';
import '../../css/z/zp9sxghjd.css';
import '../../css/u/uvnp3ubuk.css';
import '../../css/u/uc22j-hpt.css';
import '../../css/o/oflknyo8c.css';
import '../../css/i/ixazc52sb.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="d0v5wbc9f wm-shadow"/><path class="n3owmwb5r"/><path class="l7-lc22cw"/><path class="zp9sxghjd"/><path class="uvnp3ubuk wm-shine"/><path class="uc22j-hpt wm-s"/><path class="oflknyo8c wm-s"/><path class="ixazc52sb wm-s"/><path class="ug799plhe wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cloud-download"} {...others} />);
}

export default Component;
