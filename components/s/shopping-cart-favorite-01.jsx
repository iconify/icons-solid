import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/heba8yb5l.css';
import '../../css/h/h3kucfr5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="heba8yb5l"/><path class="h3kucfr5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-cart-favorite-01"} {...others} />);
}

export default Component;
