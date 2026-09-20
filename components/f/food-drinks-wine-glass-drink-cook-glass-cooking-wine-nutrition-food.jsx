import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu06apb_h.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="xu06apb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-drinks-wine-glass-drink-cook-glass-cooking-wine-nutrition-food"} {...others} />);
}

export default Component;
