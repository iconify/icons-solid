import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c0r_anbxk.css';
import '../../css/u/u7-vqsbnq.css';
import '../../css/i/io720hb-d.css';
import '../../css/o/ormp8kbuu.css';
import '../../css/f/fl3x6ymgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c0r_anbxk wm-shadow"/><path class="u7-vqsbnq wm-shadow"/><path class="io720hb-d"/><path class="ormp8kbuu"/><path class="fl3x6ymgu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sunset"} {...others} />);
}

export default Component;
