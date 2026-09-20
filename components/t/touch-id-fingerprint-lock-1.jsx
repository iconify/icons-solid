import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wel390bar.css';
import '../../css/v/v46hl1b7e.css';
import '../../css/q/qz1_9cbyo.css';
import '../../css/s/ssnnbr-gv.css';
import '../../css/l/l24ntfb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wel390bar"/><path clip-rule="evenodd" class="v46hl1b7e"/><path clip-rule="evenodd" class="qz1_9cbyo"/><path clip-rule="evenodd" class="ssnnbr-gv"/><path class="l24ntfb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:touch-id-fingerprint-lock-1"} {...others} />);
}

export default Component;
