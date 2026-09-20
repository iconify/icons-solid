import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpeweo4gr.css';
import '../../css/h/hl2ro6kwn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qpeweo4gr"/><path class="hl2ro6kwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:technology-robot-ai-signal-2"} {...others} />);
}

export default Component;
