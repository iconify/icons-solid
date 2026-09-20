import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n6ky22g8w.css';
import '../../css/y/yg216cbzy.css';
import '../../css/n/n5jcliugi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="n6ky22g8w"/><circle class="yg216cbzy"/><path class="n5jcliugi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-cherries-cook-plant-cherry-plants-drink-cooking-nutrition-vegetarian-fruit-food"} {...others} />);
}

export default Component;
