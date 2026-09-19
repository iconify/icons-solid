import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkzf_trfz.css';
import '../../css/y/yekt9d48r.css';
import '../../css/c/cfmjcfbng.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="xkzf_trfz"/><path class="yekt9d48r"/><path class="cfmjcfbng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:envelope-front-duo"} {...others} />);
}

export default Component;
