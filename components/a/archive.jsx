import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vfq7sojxn.css';
import '../../css/a/ashwm9yqb.css';
import '../../css/h/hhbd24e2i.css';
import '../../css/f/fdx0c0arh.css';
import '../../css/p/pdlot050c.css';
import '../../css/p/p0c5sj6hl.css';
import '../../css/y/yxceka8mj.css';
import '../../css/m/mwthns8qi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vfq7sojxn wm-k"/><path class="ashwm9yqb wm-k"/><path class="hhbd24e2i wm-k"/><path class="fdx0c0arh wm-a"/><path class="pdlot050c wm-k"/><path class="p0c5sj6hl wm-k"/><path class="wm-k yxceka8mj"/><path class="mwthns8qi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:archive"} {...others} />);
}

export default Component;
