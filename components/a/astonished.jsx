import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/d/dwxzg4n_g.css';
import '../../css/s/sgs1aqy-d.css';
import '../../css/l/lalwrhnoy.css';
import '../../css/r/rr_c4hbpa.css';
import '../../css/t/te_rx6b2s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="dwxzg4n_g"/><path class="sgs1aqy-d"/><path class="lalwrhnoy"/><path class="rr_c4hbpa"/><path class="te_rx6b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:astonished"} {...others} />);
}

export default Component;
