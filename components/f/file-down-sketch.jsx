import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eioevte6k.css';
import '../../css/r/rx57ytblr.css';
import '../../css/v/vyj2zpbth.css';
import '../../css/b/b1hapgd5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eioevte6k"/><path class="rx57ytblr wm-a"/><path class="vyj2zpbth wm-k"/><path class="b1hapgd5x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-down-sketch"} {...others} />);
}

export default Component;
