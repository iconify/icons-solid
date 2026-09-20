import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdj9-9bee.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gdj9-9bee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-store-signage-3-street-sandwich-shops-shop-stores-board-sign-store"} {...others} />);
}

export default Component;
