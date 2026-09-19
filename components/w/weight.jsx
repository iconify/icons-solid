import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/maqypibpp.css';
import '../../css/g/gjdc_xbhk.css';
import '../../css/m/mx_pkno7j.css';
import '../../css/o/o7-4xfbnf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="maqypibpp"/><path class="gjdc_xbhk"/><path class="mx_pkno7j"/><path class="o7-4xfbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:weight"} {...others} />);
}

export default Component;
