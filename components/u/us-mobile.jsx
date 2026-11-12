import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7cy_2mli.css';
import '../../css/m/m0rx_181p.css';
import '../../css/p/p1h-zgy2y.css';
import '../../css/v/vu-ogmxzq.css';
import '../../css/s/sl0bimztx.css';
import '../../css/k/kc_qveb6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m7cy_2mli"/><path class="m0rx_181p"/><path class="p1h-zgy2y"/><path class="vu-ogmxzq"/><path class="sl0bimztx"/><path class="kc_qveb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:us-mobile"} {...others} />);
}

export default Component;
