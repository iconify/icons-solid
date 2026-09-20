import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfc4w3bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfc4w3bvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:shopping-cart-2-line"} {...others} />);
}

export default Component;
