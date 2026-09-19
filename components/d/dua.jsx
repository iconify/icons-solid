import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lom6tkt7o.css';
import '../../css/e/exw8c4mtv.css';
import '../../css/p/pzgcelb8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="lom6tkt7o"/><path class="exw8c4mtv"/><path class="pzgcelb8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dua"} {...others} />);
}

export default Component;
