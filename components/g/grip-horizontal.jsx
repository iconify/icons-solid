import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wnxw1k5ye.css';
import '../../css/u/urb6y16ft.css';
import '../../css/c/c4iuvactu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow wnxw1k5ye"/><path class="urb6y16ft wm-shadow"/><path class="c4iuvactu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:grip-horizontal"} {...others} />);
}

export default Component;
