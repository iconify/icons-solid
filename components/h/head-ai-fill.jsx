import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctmi9mb4h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctmi9mb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:head-ai-fill"} {...others} />);
}

export default Component;
