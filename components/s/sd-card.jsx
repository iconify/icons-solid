import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ms6-jpu6y.css';
import '../../css/h/h1v9ax3qd.css';
import '../../css/h/h7czwob6d.css';
import '../../css/m/mmmkbraxl.css';
import '../../css/l/lwbdtlpdk.css';
import '../../css/m/m8_nmcyaz.css';
import '../../css/u/ui0ywfb9i.css';
import '../../css/t/t_4c2db2l.css';
import '../../css/e/eg83pfbzi.css';
import '../../css/u/uranvpbwg.css';
import '../../css/q/q7vqg5ure.css';
import '../../css/o/oe0x-nb8a.css';
import '../../css/t/tip8ki6oa.css';
import '../../css/a/a2w1y-wek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ms6-jpu6y wm-shadow"/><path class="h1v9ax3qd"/><path class="h7czwob6d"/><path class="mmmkbraxl"/><path class="lwbdtlpdk"/><path class="m8_nmcyaz"/><path class="ui0ywfb9i"/><path class="t_4c2db2l"/><path class="eg83pfbzi"/><path class="uranvpbwg"/><path class="q7vqg5ure wm-shine"/><path class="oe0x-nb8a wm-shine"/><path class="tip8ki6oa"/><path class="a2w1y-wek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:sd-card"} {...others} />);
}

export default Component;
