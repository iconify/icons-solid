import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2jemding.css';
import '../../css/z/z_y1ic90n.css';
import '../../css/j/jwwu2ccod.css';
import '../../css/e/eu942acct.css';
import '../../css/r/ryhk0obwg.css';
import '../../css/x/xhmz89bbo.css';
import '../../css/w/wxjbozb1h.css';
import '../../css/o/onkq3obaj.css';
import '../../css/d/d6zogm3ji.css';
import '../../css/g/gge_skb1u.css';
import '../../css/k/kxs68mb-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2jemding wm-shadow"/><path class="wm-k z_y1ic90n"/><path class="jwwu2ccod wm-k"/><path class="eu942acct wm-k"/><path class="ryhk0obwg wm-k"/><path class="wm-k xhmz89bbo"/><path class="wm-shine wxjbozb1h"/><path class="onkq3obaj wm-k"/><path class="d6zogm3ji wm-k"/><path class="gge_skb1u wm-k"/><path class="kxs68mb-w wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:chocolate-box"} {...others} />);
}

export default Component;
