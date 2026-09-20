import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lnvx83ber.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lnvx83ber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:shopping-cart-add"} {...others} />);
}

export default Component;
