import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_ady7bzh.css';
import '../../css/u/uynmvdzwm.css';
import '../../css/a/aqj41ub4x.css';
import '../../css/s/szv-3pbix.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g_ady7bzh"/><path class="uynmvdzwm"/><path class="aqj41ub4x"/><path class="szv-3pbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lingerie"} {...others} />);
}

export default Component;
