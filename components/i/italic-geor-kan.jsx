import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-iaqv3wh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y-iaqv3wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:italic-geor-kan"} {...others} />);
}

export default Component;
