import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w97ydz61o.css';
import '../../css/w/wg_rk8b0t.css';
import '../../css/b/bpvapv1zv.css';
import '../../css/m/m2gwakcit.css';
import '../../css/x/xh907dbqu.css';
import '../../css/s/ssqmqubku.css';
import '../../css/j/jn9c7fbpu.css';
import '../../css/a/a6x_f2qvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w97ydz61o"/><path class="wg_rk8b0t"/><path class="bpvapv1zv"/><path class="m2gwakcit"/><path class="xh907dbqu"/><path class="ssqmqubku"/><path class="jn9c7fbpu"/><path class="a6x_f2qvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:app-window-text"} {...others} />);
}

export default Component;
