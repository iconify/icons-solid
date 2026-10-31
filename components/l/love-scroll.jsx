import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/ym5iwgbry.css';
import '../../css/x/x3xh9tb1x.css';
import '../../css/y/y1uwk3bwc.css';
import '../../css/i/iyhzocb_q.css';
import '../../css/o/ott85pgeh.css';
import '../../css/d/d3l-qbctv.css';
import '../../css/a/ayqw2qhsa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ym5iwgbry"/><path class="wm-s x3xh9tb1x"/><path class="wm-shine y1uwk3bwc"/><path class="iyhzocb_q wm-k"/><path class="ott85pgeh wm-a"/><path class="d3l-qbctv wm-s"/><path class="ayqw2qhsa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:love-scroll"} {...others} />);
}

export default Component;
