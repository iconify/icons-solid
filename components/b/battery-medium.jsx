import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e8mb1rodb.css';
import '../../css/o/ovj0xkbhz.css';
import '../../css/v/vdsf7ym-k.css';
import '../../css/z/z7i-fgp5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="e8mb1rodb wm-shadow"/><path class="ovj0xkbhz"/><path class="vdsf7ym-k"/><path class="z7i-fgp5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:battery-medium"} {...others} />);
}

export default Component;
