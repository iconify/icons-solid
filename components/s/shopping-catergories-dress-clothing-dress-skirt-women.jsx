import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f5b5ebbiz.css';
import '../../css/z/zrqjhsbzn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="f5b5ebbiz"/><path class="zrqjhsbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-catergories-dress-clothing-dress-skirt-women"} {...others} />);
}

export default Component;
