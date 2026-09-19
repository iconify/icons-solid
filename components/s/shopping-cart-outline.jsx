import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3huzywhg.css';
import '../../css/a/af8o1jbnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h3huzywhg"/><path class="af8o1jbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:shopping-cart-outline"} {...others} />);
}

export default Component;
