import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ijbor0d4k.css';
import '../../css/a/anw3e0b6f.css';
import '../../css/x/xmveqg3-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ijbor0d4k wm-k"/><path class="anw3e0b6f wm-k"/><path class="wm-s xmveqg3-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:satellite-gloss"} {...others} />);
}

export default Component;
