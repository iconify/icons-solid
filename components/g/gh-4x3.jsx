import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1_96iyla.css';
import '../../css/j/j7l2cq2fe.css';
import '../../css/y/yt-bzx_hx.css';
import '../../css/s/s22tbkbrz.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="j1_96iyla"/><path class="j7l2cq2fe"/><path class="yt-bzx_hx"/><path class="s22tbkbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gh-4x3"} {...others} />);
}

export default Component;
