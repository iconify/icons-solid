import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf5yhlbua.css';
import '../../css/e/eu2bpjbbr.css';
import '../../css/z/zkic90lmy.css';
import '../../css/y/ygwioac4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hf5yhlbua wm-k"/><path class="eu2bpjbbr wm-deco"/><path class="wm-k zkic90lmy"/><path class="wm-shadow ygwioac4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:euro"} {...others} />);
}

export default Component;
