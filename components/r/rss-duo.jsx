import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i6g3_sbrr.css';
import '../../css/w/wi2sckbls.css';
import '../../css/w/wgi9_72zv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="i6g3_sbrr"/><path class="wi2sckbls"/><path class="wgi9_72zv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rss-duo"} {...others} />);
}

export default Component;
