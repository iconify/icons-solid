import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7ze1_r8q.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="f7ze1_r8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"} {...others} />);
}

export default Component;
