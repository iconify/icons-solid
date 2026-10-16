import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czmnpfbuv.css';
import '../../css/v/vy9zp_bkd.css';
import '../../css/h/h1yn6ab_j.css';
import '../../css/n/n5omxc2qq.css';
import '../../css/m/mrtw_lq_f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="czmnpfbuv"/><path class="vy9zp_bkd"/><path class="h1yn6ab_j"/><path class="n5omxc2qq"/><path class="mrtw_lq_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-greenhouse-20"} {...others} />);
}

export default Component;
