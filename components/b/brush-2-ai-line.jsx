import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir4zf7qyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir4zf7qyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:brush-2-ai-line"} {...others} />);
}

export default Component;
