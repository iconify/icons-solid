import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1p7jhbxe.css';
import '../../css/z/zgnyoc33d.css';
import '../../css/v/vrgxrwbxc.css';
import '../../css/p/pz4rkpliw.css';
import '../../css/e/eb0_gkb_h.css';
import '../../css/q/q16gypbmx.css';
import '../../css/q/q48i71-2k.css';
import '../../css/r/ryzxqf0gw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="u1p7jhbxe"/><path class="zgnyoc33d"/><path class="vrgxrwbxc"/><path class="pz4rkpliw"/><path class="eb0_gkb_h"/><path class="q16gypbmx"/><path class="q48i71-2k"/><path class="ryzxqf0gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:right-anger-bubble"} {...others} />);
}

export default Component;
