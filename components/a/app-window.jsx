import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q3bgkubrx.css';
import '../../css/n/nv21rbpbn.css';
import '../../css/j/jmymbhwhv.css';
import '../../css/l/lmc0pzw-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="q3bgkubrx wm-shadow"/><path class="nv21rbpbn wm-shadow"/><path class="jmymbhwhv"/><path class="lmc0pzw-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:app-window"} {...others} />);
}

export default Component;
