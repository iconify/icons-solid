import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm5w_o49z.css';
import '../../css/f/f_tlp__ao.css';
import '../../css/u/us9cbxkls.css';
import '../../css/r/rdd2babaj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mm5w_o49z"/><path class="f_tlp__ao"/><path class="us9cbxkls"/><path class="rdd2babaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yurt-20-bold"} {...others} />);
}

export default Component;
