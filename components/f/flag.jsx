import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cmc9imbbd.css';
import '../../css/f/fl3m636-p.css';
import '../../css/u/umrdc7dxj.css';
import '../../css/b/bm9xalosn.css';
import '../../css/j/j46hw3bto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cmc9imbbd wm-shadow"/><path class="fl3m636-p"/><path class="umrdc7dxj"/><path class="bm9xalosn"/><path class="j46hw3bto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:flag"} {...others} />);
}

export default Component;
