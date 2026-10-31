import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/f/f7f-4dxab.css';
import '../../css/z/zapf9wtzl.css';
import '../../css/y/ylqikcc_h.css';
import '../../css/t/t50l83bdr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="f7f-4dxab wm-shadow"/><path class="wm-shadow zapf9wtzl"/><path class="ylqikcc_h"/><path class="t50l83bdr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:swap"} {...others} />);
}

export default Component;
