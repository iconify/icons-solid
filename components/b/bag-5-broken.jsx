import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m1a0v8b1i.css';
import '../../css/f/ffvukwp6p.css';
import '../../css/t/t8k39sbmk.css';
import '../../css/b/bv16y576p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="m1a0v8b1i"/><path class="ffvukwp6p"/><path class="t8k39sbmk"/><path class="bv16y576p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bag-5-broken"} {...others} />);
}

export default Component;
