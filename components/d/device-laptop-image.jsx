import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuc8o_5mk.css';
import '../../css/i/ix4zi_etp.css';
import '../../css/d/dj0jz1r4t.css';
import '../../css/k/kpgpbybfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yuc8o_5mk"/><path class="ix4zi_etp"/><path class="dj0jz1r4t"/><path class="kpgpbybfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-laptop-image"} {...others} />);
}

export default Component;
