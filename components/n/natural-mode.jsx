import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol1qgland.css';
import '../../css/x/xvzaotb_b.css';
import '../../css/g/g0av7_f0k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ol1qgland"><path class="xvzaotb_b"/><path class="g0av7_f0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:natural-mode"} {...others} />);
}

export default Component;
