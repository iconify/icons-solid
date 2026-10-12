import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yc5jskyqr.css';
import '../../css/d/dvqecdcrk.css';
import '../../css/v/vysufwb5l.css';
import '../../css/k/kzoa-nbsh.css';
import '../../css/f/f11xzr_yc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yc5jskyqr"/><rect transform="matrix(-1 0 0 1 9.96 2.76)" class="dvqecdcrk"/><path class="vysufwb5l"/><path class="kzoa-nbsh"/><path class="f11xzr_yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:template-sparkle"} {...others} />);
}

export default Component;
