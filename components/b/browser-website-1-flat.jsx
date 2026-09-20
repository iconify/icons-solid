import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z145zhb_r.css';
import '../../css/h/h54yt-lzh.css';
import '../../css/h/hpt6_3jge.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z145zhb_r"/><path class="h54yt-lzh"/><path clip-rule="evenodd" class="hpt6_3jge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:browser-website-1-flat"} {...others} />);
}

export default Component;
