import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lzvv6ryeo.css';
import '../../css/p/piq7nbcjz.css';
import '../../css/o/od0wt3bac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lzvv6ryeo"/><path class="piq7nbcjz"/><path class="od0wt3bac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:traffic-light"} {...others} />);
}

export default Component;
