import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjb570f_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xjb570f_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-cart-add-01"} {...others} />);
}

export default Component;
