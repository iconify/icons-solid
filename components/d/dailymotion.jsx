import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u78g_1byh.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="u78g_1byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:dailymotion"} {...others} />);
}

export default Component;
