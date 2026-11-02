import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c3wm5xxdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c3wm5xxdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hop-2-off-line"} {...others} />);
}

export default Component;
