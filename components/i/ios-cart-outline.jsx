import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uge65rbva.css';
import '../../css/p/pq7bzbb4c.css';
import '../../css/e/e-neq9bwz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uge65rbva"/><path class="pq7bzbb4c"/><path class="e-neq9bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cart-outline"} {...others} />);
}

export default Component;
