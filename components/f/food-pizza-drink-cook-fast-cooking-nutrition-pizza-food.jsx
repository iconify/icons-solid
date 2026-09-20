import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gbenb29wy.css';
import '../../css/h/hzuhm8ymx.css';
import '../../css/c/cpfj8fwdk.css';
import '../../css/e/e0-lg2-cu.css';
import '../../css/d/dlkvdcebj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gbenb29wy"/><path class="hzuhm8ymx"/><circle class="cpfj8fwdk"/><circle class="e0-lg2-cu"/><circle class="dlkvdcebj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-pizza-drink-cook-fast-cooking-nutrition-pizza-food"} {...others} />);
}

export default Component;
