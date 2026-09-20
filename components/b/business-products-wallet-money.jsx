import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7w-e1i8e.css';
import '../../css/k/khuf8xa_t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v7w-e1i8e"/><path class="khuf8xa_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:business-products-wallet-money"} {...others} />);
}

export default Component;
