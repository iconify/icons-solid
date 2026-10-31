import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ojm0g0b0w.css';
import '../../css/c/cvkvj-pkr.css';
import '../../css/m/mf8c4vo4f.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/huktpebgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ojm0g0b0w"/><path class="cvkvj-pkr"/><path class="mf8c4vo4f wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="huktpebgs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:circle-dot"} {...others} />);
}

export default Component;
