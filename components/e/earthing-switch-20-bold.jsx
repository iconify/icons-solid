import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwejfdz7y.css';
import '../../css/p/pksimbbzc.css';
import '../../css/h/hoizzqbxs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vwejfdz7y"/><path class="pksimbbzc"/><path class="hoizzqbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earthing-switch-20-bold"} {...others} />);
}

export default Component;
