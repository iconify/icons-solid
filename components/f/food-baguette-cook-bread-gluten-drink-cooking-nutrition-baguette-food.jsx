import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkk9kobqk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kkk9kobqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-baguette-cook-bread-gluten-drink-cooking-nutrition-baguette-food"} {...others} />);
}

export default Component;
