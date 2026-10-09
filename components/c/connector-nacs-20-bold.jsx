import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vea99ibyc.css';
import '../../css/y/ybtvnxb3i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vea99ibyc"/><path class="ybtvnxb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-nacs-20-bold"} {...others} />);
}

export default Component;
