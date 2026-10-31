import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bii44ybvr.css';
import '../../css/c/cngzmacmv.css';
import '../../css/i/i-e0xfb7g.css';
import '../../css/l/l0eprvn5b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bii44ybvr"/><path class="cngzmacmv wm-shine"/><path class="i-e0xfb7g wm-k"/><path class="l0eprvn5b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hand-coins"} {...others} />);
}

export default Component;
