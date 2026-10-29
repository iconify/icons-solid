import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stq9o589s.css';
import '../../css/u/uba7_m4oz.css';
import '../../css/p/pu0dxsbmz.css';
import '../../css/v/v96_hlbuv.css';
import '../../css/d/d31kuca8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="stq9o589s wm-k"/><path class="uba7_m4oz wm-k"/><path class="pu0dxsbmz wm-k"/><path class="v96_hlbuv wm-shine"/><path class="d31kuca8l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:alert-triangle"} {...others} />);
}

export default Component;
