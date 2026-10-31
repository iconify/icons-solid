import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v0dlvtb_a.css';
import '../../css/u/ur0zhsron.css';
import '../../css/x/xz6j7obpt.css';
import '../../css/m/miaw0lbio.css';
import '../../css/s/s1vtn9bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v0dlvtb_a"/><path class="ur0zhsron wm-shine"/><path class="wm-k xz6j7obpt"/><path class="miaw0lbio wm-a"/><path class="s1vtn9bnk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pizza"} {...others} />);
}

export default Component;
