import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpey4z4rt.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vpey4z4rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-bone-pet-dog-bone-food-snack"} {...others} />);
}

export default Component;
