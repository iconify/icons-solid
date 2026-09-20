import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r247vsbdl.css';
import '../../css/n/nkncs4b1r.css';
import '../../css/n/na9l3_b7s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="r247vsbdl"/><path class="nkncs4b1r"/><path class="na9l3_b7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-broken"} {...others} />);
}

export default Component;
