import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slg6w6aek.css';
import '../../css/m/mt5r81b_j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="slg6w6aek"/><path class="mt5r81b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:shopping-shipping-weight-kg"} {...others} />);
}

export default Component;
