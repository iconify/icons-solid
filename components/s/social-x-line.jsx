import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlm5zeidu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vlm5zeidu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:social-x-line"} {...others} />);
}

export default Component;
