import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/n/nfoaacb-u.css';
import '../../css/j/j89xbobxl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="nfoaacb-u"/><path class="j89xbobxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-send-reply-all"} {...others} />);
}

export default Component;
