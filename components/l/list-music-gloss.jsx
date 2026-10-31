import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smwufls_s.css';
import '../../css/h/hhez0bc7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="smwufls_s wm-k"/><path class="hhez0bc7b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-music-gloss"} {...others} />);
}

export default Component;
