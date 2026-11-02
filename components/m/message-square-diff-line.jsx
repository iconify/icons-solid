import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-3mx_b9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-3mx_b9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:message-square-diff-line"} {...others} />);
}

export default Component;
