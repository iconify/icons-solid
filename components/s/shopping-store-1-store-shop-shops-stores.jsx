import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1-j1r2ty.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="u1-j1r2ty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-store-1-store-shop-shops-stores"} {...others} />);
}

export default Component;
