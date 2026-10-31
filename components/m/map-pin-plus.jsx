import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/t-7cynltd.css';
import '../../css/i/i9kmap_so.css';
import '../../css/h/h05zebbih.css';
import '../../css/f/flr9t1ipy.css';
import '../../css/s/s8ns_2bvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="t-7cynltd wm-shadow"/><path class="i9kmap_so wm-shadow"/><path class="h05zebbih"/><path class="flr9t1ipy"/><path class="s8ns_2bvx wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:map-pin-plus"} {...others} />);
}

export default Component;
