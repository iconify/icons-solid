import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gyaawlnzy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="gyaawlnzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-burger-drink-burger-fast-cook-cooking-nutrition-food"} {...others} />);
}

export default Component;
