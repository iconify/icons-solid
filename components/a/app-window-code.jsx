import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wrjjqcbcs.css';
import '../../css/w/wg_rk8b0t.css';
import '../../css/b/bpvapv1zv.css';
import '../../css/m/m2gwakcit.css';
import '../../css/m/mgr6sqb6k.css';
import '../../css/x/xe5i-8b1g.css';
import '../../css/h/hv-386boe.css';
import '../../css/a/a6x_f2qvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wrjjqcbcs"/><path class="wg_rk8b0t"/><path class="bpvapv1zv"/><path class="m2gwakcit"/><path class="mgr6sqb6k"/><path class="xe5i-8b1g"/><path class="hv-386boe"/><path class="a6x_f2qvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:app-window-code"} {...others} />);
}

export default Component;
