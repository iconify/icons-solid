import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bga_7bc3z.css';
import '../../css/h/hjy563b8z.css';
import '../../css/h/hyb74pb9k.css';
import '../../css/i/ip9g62bcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bga_7bc3z wm-shadow"/><path class="hjy563b8z wm-shadow"/><path class="hyb74pb9k"/><path class="ip9g62bcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sd-card"} {...others} />);
}

export default Component;
