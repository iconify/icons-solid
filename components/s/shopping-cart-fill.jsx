import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d4qwihg_t.css';
import '../../css/t/t-i6h4yjv.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path clip-rule="evenodd" class="d4qwihg_t"/><path class="t-i6h4yjv"/><path class="czbbm17fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shopping-cart-fill"} {...others} />);
}

export default Component;
