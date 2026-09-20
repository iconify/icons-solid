import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l32lerbfx.css';
import '../../css/l/l6_t7qyjo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l32lerbfx"/><path class="l6_t7qyjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-gemini-ai-open"} {...others} />);
}

export default Component;
