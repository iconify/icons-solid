import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yt64u8bvw.css';
import '../../css/z/z0fu1xbhy.css';
import '../../css/x/xnodzworh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="wm-k yt64u8bvw"/><path class="wm-a z0fu1xbhy"/><path class="wm-s xnodzworh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bot-off-gloss"} {...others} />);
}

export default Component;
