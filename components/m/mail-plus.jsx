import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iqv-zhbpx.css';
import '../../css/m/m1mehdbbm.css';
import '../../css/r/rp1jh4bdk.css';
import '../../css/o/o7e-_nb3q.css';
import '../../css/j/jw9mgewxo.css';
import '../../css/a/a_c144b9d.css';
import '../../css/r/rgk5-1b7l.css';
import '../../css/p/pfv0zabaz.css';
import '../../css/p/pn1ribbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iqv-zhbpx wm-k"/><path class="m1mehdbbm wm-k"/><path class="rp1jh4bdk wm-k"/><path class="o7e-_nb3q wm-k"/><path class="jw9mgewxo wm-shine"/><path class="a_c144b9d wm-a"/><path class="rgk5-1b7l wm-s"/><path class="pfv0zabaz wm-s"/><path class="pn1ribbjf wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:mail-plus"} {...others} />);
}

export default Component;
