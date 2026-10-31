import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i4zeojk8d.css';
import '../../css/c/cbgb6hb6t.css';
import '../../css/j/jh5_0cbif.css';
import '../../css/e/ehz_gxbyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="i4zeojk8d"/><path class="cbgb6hb6t wm-shine"/><path class="jh5_0cbif wm-k"/><path class="ehz_gxbyn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:speaker"} {...others} />);
}

export default Component;
