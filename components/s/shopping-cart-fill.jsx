import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e328_0bet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e328_0bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:shopping-cart-fill"} {...others} />);
}

export default Component;
