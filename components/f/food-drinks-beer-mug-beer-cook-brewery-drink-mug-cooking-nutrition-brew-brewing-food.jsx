import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo7tz9b6z.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="eo7tz9b6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-beer-mug-beer-cook-brewery-drink-mug-cooking-nutrition-brew-brewing-food"} {...others} />);
}

export default Component;
