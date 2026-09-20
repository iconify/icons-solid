import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lde70vbjm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lde70vbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:half-star-rtl"} {...others} />);
}

export default Component;
