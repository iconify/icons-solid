import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/ec2o3gb4k.css';
import '../../css/n/ne2--zbxi.css';
import '../../css/c/cp-isebkp.css';
import '../../css/k/khbfwowbu.css';
import '../../css/n/n1wtnyd7d.css';
import '../../css/t/tun4cfbrt.css';
import '../../css/g/gc_1gba8z.css';
import '../../css/o/og5nsgxoi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ec2o3gb4k wm-shadow"/><path class="ne2--zbxi"/><path class="cp-isebkp"/><path class="khbfwowbu"/><path class="n1wtnyd7d wm-shine"/><path class="tun4cfbrt wm-s"/><path class="gc_1gba8z wm-s"/><path class="og5nsgxoi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:smartphone-message"} {...others} />);
}

export default Component;
