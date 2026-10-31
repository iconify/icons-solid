import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/johcinb0t.css';
import '../../css/v/vgbrn8b-p.css';
import '../../css/f/fxsj7--8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="johcinb0t wm-shadow"/><path class="vgbrn8b-p wm-shadow"/><path class="fxsj7--8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:indent-increase"} {...others} />);
}

export default Component;
