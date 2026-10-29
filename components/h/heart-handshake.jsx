import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nv-fhltce.css';
import '../../css/b/b5sf0r38s.css';
import '../../css/d/d_o5-2c-o.css';
import '../../css/y/yd4vfac5m.css';
import '../../css/f/fg9cfzi8r.css';
import '../../css/g/g1zawawpv.css';
import '../../css/k/kxsnv4wqv.css';
import '../../css/x/x621k-4ud.css';
import '../../css/s/spfytxckq.css';
import '../../css/b/bxp5n9bua.css';
import '../../css/m/m6pxd4ajd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nv-fhltce wm-shadow"/><path class="b5sf0r38s wm-shadow"/><path class="d_o5-2c-o"/><path class="yd4vfac5m"/><path class="fg9cfzi8r"/><path class="g1zawawpv"/><path class="kxsnv4wqv wm-shine"/><path class="wm-shine x621k-4ud"/><path class="spfytxckq"/><path class="bxp5n9bua"/><path class="m6pxd4ajd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:heart-handshake"} {...others} />);
}

export default Component;
