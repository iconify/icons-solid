import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fh6et46de.css';
import '../../css/q/qxbbo4bju.css';
import '../../css/u/up3-8gucx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fh6et46de"/><path class="qxbbo4bju"/><circle class="up3-8gucx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-cheese-2-cook-cheese-animal-products-cooking-nutrition-dairy-food"} {...others} />);
}

export default Component;
