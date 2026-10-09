import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dz5_qkdfv.css';
import '../../css/m/mu_rg1b1t.css';
import '../../css/w/wpp7bqbdr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dz5_qkdfv"/><path class="mu_rg1b1t"/><path class="wpp7bqbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-water-20"} {...others} />);
}

export default Component;
