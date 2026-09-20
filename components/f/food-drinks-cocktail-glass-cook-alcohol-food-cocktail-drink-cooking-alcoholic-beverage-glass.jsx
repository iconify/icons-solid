import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_bx7palg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="a_bx7palg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-cocktail-glass-cook-alcohol-food-cocktail-drink-cooking-alcoholic-beverage-glass"} {...others} />);
}

export default Component;
