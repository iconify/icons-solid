import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ooax0ab2a.css';
import '../../css/w/wt8crubuj.css';
import '../../css/d/d_6sdrbtw.css';
import '../../css/x/xqtseob8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="ooax0ab2a wm-k"/><path class="wm-k wt8crubuj"/><path class="d_6sdrbtw wm-a"/><path class="wm-deco xqtseob8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:toran-gloss"} {...others} />);
}

export default Component;
