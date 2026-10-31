import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/ttg5rcbmz.css';
import '../../css/c/cen0gcb9k.css';
import '../../css/i/ijwgybuji.css';
import '../../css/j/j5-ljmbzq.css';
import '../../css/p/pti-lj84z.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/s/s7hum9b6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ttg5rcbmz wm-shadow"/><path class="cen0gcb9k"/><path class="ijwgybuji"/><path class="j5-ljmbzq"/><path class="pti-lj84z"/><path class="kx3zikbiq"/><path class="s7hum9b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-person"} {...others} />);
}

export default Component;
