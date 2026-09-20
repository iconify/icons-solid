import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1dnv6dph.css';
import '../../css/b/b5b7d6bal.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="z1dnv6dph"/><path class="b5b7d6bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shopping-cart-3"} {...others} />);
}

export default Component;
