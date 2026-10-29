import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ii7ckzbik.css';
import '../../css/d/dyfkqxb3f.css';
import '../../css/o/o5yb9qrva.css';
import '../../css/i/i6h-z_bao.css';
import '../../css/g/g2ev5qkyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ii7ckzbik wm-k"/><path class="dyfkqxb3f wm-a"/><path class="o5yb9qrva"/><path class="i6h-z_bao"/><path class="g2ev5qkyw wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:alarm-clock-check"} {...others} />);
}

export default Component;
