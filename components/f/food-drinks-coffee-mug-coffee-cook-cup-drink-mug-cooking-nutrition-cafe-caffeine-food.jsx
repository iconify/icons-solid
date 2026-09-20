import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbsp_yblv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="kbsp_yblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-coffee-mug-coffee-cook-cup-drink-mug-cooking-nutrition-cafe-caffeine-food"} {...others} />);
}

export default Component;
