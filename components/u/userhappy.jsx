import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xnn7-0g9o.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xnn7-0g9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:userhappy"} {...others} />);
}

export default Component;
