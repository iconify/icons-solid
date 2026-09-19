import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ht-g1lbxx.css';

const viewBox = {"width":432,"height":456};
const content = `<path class="ht-g1lbxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:shopping-cart-plus"} {...others} />);
}

export default Component;
