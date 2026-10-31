import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ichxfjb4s.css';
import '../../css/d/dq52hjbax.css';
import '../../css/t/t8k0bbs6g.css';
import '../../css/q/qrwfd8ber.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ichxfjb4s"/><path class="dq52hjbax wm-shine"/><path class="t8k0bbs6g wm-k"/><path class="qrwfd8ber wm-a"/><path class="ugzrm7bka wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:golf"} {...others} />);
}

export default Component;
