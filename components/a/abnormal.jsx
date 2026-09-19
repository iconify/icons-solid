import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o69rz_q4o.css';
import '../../css/t/t8zxx6pmv.css';
import '../../css/u/ua0oofu6h.css';
import '../../css/w/wwccggb9v.css';
import '../../css/d/doekpvbhh.css';
import '../../css/a/a9503u7on.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="o69rz_q4o"/><path class="t8zxx6pmv"/><path class="ua0oofu6h"/><circle transform="rotate(90 34 34)" class="wwccggb9v"/><path class="doekpvbhh"/><circle class="a9503u7on"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:abnormal"} {...others} />);
}

export default Component;
