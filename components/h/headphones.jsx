import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nionbebtx.css';
import '../../css/o/o1ymgumjk.css';
import '../../css/i/i2fe2xbeg.css';
import '../../css/z/zpikw17us.css';
import '../../css/u/u25kwdbxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nionbebtx wm-shadow"/><path class="o1ymgumjk wm-shadow"/><path class="i2fe2xbeg"/><path class="zpikw17us"/><path class="u25kwdbxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:headphones"} {...others} />);
}

export default Component;
