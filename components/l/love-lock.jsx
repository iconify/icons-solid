import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u_z_zrbmg.css';
import '../../css/j/jfz0e31az.css';
import '../../css/t/tcwm-xbnk.css';
import '../../css/p/pr1geo56p.css';
import '../../css/q/qrd96xfru.css';
import '../../css/q/q8af4qscx.css';
import '../../css/w/wx_og2f1g.css';
import '../../css/n/n6iclr46m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u_z_zrbmg wm-a"/><path class="jfz0e31az wm-a"/><path class="tcwm-xbnk wm-a"/><path class="pr1geo56p wm-k"/><path class="qrd96xfru wm-k"/><path class="q8af4qscx wm-k"/><path class="wm-shine wx_og2f1g"/><path class="n6iclr46m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:love-lock"} {...others} />);
}

export default Component;
