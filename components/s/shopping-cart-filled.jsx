import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2hrev5_h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t2hrev5_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shopping-cart-filled"} {...others} />);
}

export default Component;
