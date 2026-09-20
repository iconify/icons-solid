import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0rev_bok.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="i0rev_bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products"} {...others} />);
}

export default Component;
