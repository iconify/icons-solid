import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vygnzo2pp.css';
import '../../css/i/ibfbl8b6r.css';
import '../../css/g/g3t9fpbhm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vygnzo2pp"/><path class="ibfbl8b6r"/><path class="g3t9fpbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:uv-03"} {...others} />);
}

export default Component;
