import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eomg5oe0j.css';
import '../../css/n/njcmzh3nb.css';
import '../../css/g/gg5y9t4ah.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eomg5oe0j"/><path class="njcmzh3nb"/><path clip-rule="evenodd" class="gg5y9t4ah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:paint-pallet"} {...others} />);
}

export default Component;
