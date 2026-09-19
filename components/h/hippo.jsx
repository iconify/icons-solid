import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vclym-vxn.css';
import '../../css/h/hidotxb8u.css';
import '../../css/z/zlvkj_bix.css';
import '../../css/i/ij1ec5bpn.css';
import '../../css/c/cu63mnb6h.css';
import '../../css/h/h4lclgb7y.css';
import '../../css/o/oqxonwm0s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQeQ8Bo2b"><g class="ft5dv1b6b"><rect class="vclym-vxn"/><circle class="hidotxb8u"/><circle class="zlvkj_bix"/><path class="ij1ec5bpn"/><circle class="cu63mnb6h"/><circle class="h4lclgb7y"/><path class="oqxonwm0s"/></g></mask></defs><path mask="url(#SVGQeQ8Bo2b)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hippo"} {...others} />);
}

export default Component;
