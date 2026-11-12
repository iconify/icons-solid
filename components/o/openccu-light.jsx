import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0bw_ob_p.css';
import '../../css/x/xxxf_cbqq.css';
import '../../css/g/g-akbab4s.css';
import '../../css/p/piah8zo9n.css';
import '../../css/o/o8z_vwbog.css';
import '../../css/c/ck3zavgrq.css';
import '../../css/t/texzz_a-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v0bw_ob_p"/><path class="xxxf_cbqq"/><path class="g-akbab4s"/><path class="piah8zo9n"/><path class="o8z_vwbog"/><path class="ck3zavgrq"/><path class="texzz_a-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openccu-light"} {...others} />);
}

export default Component;
