import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bxiujei5b.css';
import '../../css/q/qrlq0qbok.css';
import '../../css/s/s7vwfzb4c.css';
import '../../css/d/d0tiy9blv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bxiujei5b"/><path class="qrlq0qbok wm-k"/><path class="s7vwfzb4c wm-a"/><path class="d0tiy9blv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-arrow-down-sketch"} {...others} />);
}

export default Component;
