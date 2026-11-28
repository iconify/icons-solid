import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/df_igmx4m.css';
import '../../css/d/d-f_kel6u.css';
import '../../css/x/xxgdw-btn.css';
import '../../css/q/qy38zdwvn.css';
import '../../css/l/lw51043_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="df_igmx4m"/><path class="d-f_kel6u"/><path class="xxgdw-btn"/><path class="qy38zdwvn"/><path class="lw51043_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:waveform-low"} {...others} />);
}

export default Component;
