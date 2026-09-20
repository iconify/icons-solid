import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_d1t5cfa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e_d1t5cfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:italic-arab-keheh-jeem"} {...others} />);
}

export default Component;
