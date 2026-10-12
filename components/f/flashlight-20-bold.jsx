import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx_ljtb_m.css';
import '../../css/z/za3i1qbft.css';
import '../../css/o/o5jhy_bpa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kx_ljtb_m"/><path class="za3i1qbft"/><path class="o5jhy_bpa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flashlight-20-bold"} {...others} />);
}

export default Component;
