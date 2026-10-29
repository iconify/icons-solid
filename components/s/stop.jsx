import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbvhx2bhg.css';
import '../../css/t/tojyh1h4v.css';
import '../../css/x/x8z5eibiy.css';
import '../../css/i/iqxcsfbku.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gbvhx2bhg wm-k"/><path class="tojyh1h4v wm-k"/><path class="wm-k x8z5eibiy"/><path class="iqxcsfbku wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:stop"} {...others} />);
}

export default Component;
