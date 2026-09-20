import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/r/rvxiovkwu.css';
import '../../css/u/unvpovb4h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="rvxiovkwu"/><path class="unvpovb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-bubble-oval-smiley-1"} {...others} />);
}

export default Component;
