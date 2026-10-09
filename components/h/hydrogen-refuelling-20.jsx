import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr0clkknd.css';
import '../../css/b/bhhnh4bmp.css';
import '../../css/k/k_3z1lbzk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zr0clkknd"/><path class="bhhnh4bmp"/><path class="k_3z1lbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-refuelling-20"} {...others} />);
}

export default Component;
