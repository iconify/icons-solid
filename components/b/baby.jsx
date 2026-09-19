import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yypbjckaa.css';
import '../../css/q/qhxtnjb-w.css';
import '../../css/b/bw3tr2qkv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yypbjckaa"/><path class="qhxtnjb-w"/><path class="bw3tr2qkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:baby"} {...others} />);
}

export default Component;
