import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7xg-d9mp.css';
import '../../css/s/sixno4ylc.css';
import '../../css/x/x4439ol_e.css';
import '../../css/e/ei-qnj_wh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y7xg-d9mp"/><path clip-rule="evenodd" class="sixno4ylc"/><path class="x4439ol_e"/><path clip-rule="evenodd" class="ei-qnj_wh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:file-remove-outline"} {...others} />);
}

export default Component;
