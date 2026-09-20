import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx118f5my.css';
import '../../css/b/btb61zlai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jx118f5my"/><path class="btb61zlai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:shopping-cart-1-line"} {...others} />);
}

export default Component;
