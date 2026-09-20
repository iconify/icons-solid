import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eoetq2b0d.css';
import '../../css/e/e_8kd3buu.css';
import '../../css/p/pbhj346_p.css';
import '../../css/g/gss1pq6sj.css';
import '../../css/x/x4tkz9bbr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="eoetq2b0d"/><path class="e_8kd3buu"/><path class="pbhj346_p"/><path class="gss1pq6sj"/><path class="x4tkz9bbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:headphones-round-line-duotone"} {...others} />);
}

export default Component;
