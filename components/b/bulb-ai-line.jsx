import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p71seyb2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p71seyb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:bulb-ai-line"} {...others} />);
}

export default Component;
