import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/z/zp7cvwirh.css';
import '../../css/z/zmhio7umw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="zp7cvwirh"/><path class="zmhio7umw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:chat-two-bubbles-oval"} {...others} />);
}

export default Component;
