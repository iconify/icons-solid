import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/funjsb_-c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="funjsb_-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:italic-a"} {...others} />);
}

export default Component;
