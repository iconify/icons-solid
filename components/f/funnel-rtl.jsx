import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ul9m5ac3g.css';
import '../../css/j/j26snyixz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ul9m5ac3g"/><path class="j26snyixz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:funnel-rtl"} {...others} />);
}

export default Component;
