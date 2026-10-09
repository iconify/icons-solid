import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0oe2vbzu.css';
import '../../css/z/zijqf-s4l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i0oe2vbzu"/><path class="zijqf-s4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rss-20-bold"} {...others} />);
}

export default Component;
