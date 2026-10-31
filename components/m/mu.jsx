import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4qw8rbyi.css';
import '../../css/x/xosvhbc5x.css';
import '../../css/c/c37hzbbsc.css';
import '../../css/b/b4n_pebcp.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="x4qw8rbyi"/><path class="xosvhbc5x"/><path class="c37hzbbsc"/><path class="b4n_pebcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mu"} {...others} />);
}

export default Component;
