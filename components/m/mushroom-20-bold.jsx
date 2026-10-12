import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv6j1_b0y.css';
import '../../css/i/i2kxrqbji.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hv6j1_b0y"/><path class="i2kxrqbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mushroom-20-bold"} {...others} />);
}

export default Component;
