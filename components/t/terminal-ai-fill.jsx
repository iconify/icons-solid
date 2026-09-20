import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp8fpmbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xp8fpmbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:terminal-ai-fill"} {...others} />);
}

export default Component;
