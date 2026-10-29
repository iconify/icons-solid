import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myugk7b_u.css';
import '../../css/i/i10lhg0ph.css';
import '../../css/r/r2x0a4sip.css';
import '../../css/v/vug503bco.css';
import '../../css/j/ji5yxbb0y.css';
import '../../css/i/iepyty46t.css';
import '../../css/a/a94rubbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="myugk7b_u wm-k"/><path class="i10lhg0ph wm-k"/><path class="r2x0a4sip wm-k"/><path class="vug503bco wm-shine"/><path class="ji5yxbb0y wm-a"/><path class="iepyty46t wm-a"/><path class="a94rubbpj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:strikethrough"} {...others} />);
}

export default Component;
