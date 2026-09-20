import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsijaab7s.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="bsijaab7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-cocktail-1-cook-alcohol-food-cocktail-drink-cooking-nutrition-alcoholic-beverage-glass"} {...others} />);
}

export default Component;
