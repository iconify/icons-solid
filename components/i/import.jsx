import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xikknb5pn.css';
import '../../css/f/fp0qfxbzq.css';
import '../../css/o/ohu8q1bbk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xikknb5pn"/><path class="fp0qfxbzq"/><path class="ohu8q1bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:import"} {...others} />);
}

export default Component;
