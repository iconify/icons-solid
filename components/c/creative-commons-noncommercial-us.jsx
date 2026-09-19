import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk7_07bsp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dk7_07bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:creative-commons-noncommercial-us"} {...others} />);
}

export default Component;
