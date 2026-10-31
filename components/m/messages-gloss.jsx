import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/to-zd5kwo.css';
import '../../css/h/hdr8m176b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="to-zd5kwo wm-k"/><path class="hdr8m176b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:messages-gloss"} {...others} />);
}

export default Component;
