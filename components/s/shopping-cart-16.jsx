import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpstelbjx.css';
import '../../css/u/u807m5otq.css';
import '../../css/z/z8olsbb6u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vpstelbjx"/><path clip-rule="evenodd" class="u807m5otq"/><path class="z8olsbb6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:shopping-cart-16"} {...others} />);
}

export default Component;
