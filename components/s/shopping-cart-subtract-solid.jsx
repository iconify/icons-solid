import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtnq_1kzk.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="wtnq_1kzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-cart-subtract-solid"} {...others} />);
}

export default Component;
