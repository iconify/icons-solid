import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8mvphghl.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="d8mvphghl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drum-stick-1-cook-animal-drumsticks-products-chicken-cooking-nutrition-food"} {...others} />);
}

export default Component;
