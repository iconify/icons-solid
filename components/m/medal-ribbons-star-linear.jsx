import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pfjefkbxt.css';
import '../../css/i/i6nrt8nnu.css';
import '../../css/r/rtsf20bbs.css';
import '../../css/b/bc8a__bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pfjefkbxt"/><path class="i6nrt8nnu"/><path class="rtsf20bbs"/><path class="bc8a__bpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-ribbons-star-linear"} {...others} />);
}

export default Component;
