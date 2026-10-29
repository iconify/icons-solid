import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pihpx0b1w.css';
import '../../css/p/p4r5no1fl.css';
import '../../css/d/d9vmqk8dp.css';
import '../../css/k/khkv19xav.css';
import '../../css/b/b5430rf_g.css';
import '../../css/f/fg8tnstol.css';
import '../../css/g/gg9z2kwys.css';
import '../../css/k/kzl4x4b5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pihpx0b1w wm-shadow"/><path class="p4r5no1fl wm-k"/><path class="d9vmqk8dp wm-k"/><path class="khkv19xav wm-k"/><path class="b5430rf_g wm-k"/><path class="fg8tnstol wm-shine"/><path class="gg9z2kwys wm-k"/><path class="kzl4x4b5b wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:dumpling"} {...others} />);
}

export default Component;
