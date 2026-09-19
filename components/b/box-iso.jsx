import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vl0ghjbbr.css';
import '../../css/a/a92sbk2qf.css';
import '../../css/r/r3wm3tj4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vl0ghjbbr"/><path class="a92sbk2qf"/><path class="r3wm3tj4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:box-iso"} {...others} />);
}

export default Component;
