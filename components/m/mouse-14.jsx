import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pigt72van.css';
import '../../css/l/loci0ub5e.css';
import '../../css/n/n4oalivtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pigt72van"/><path class="loci0ub5e"/><path class="n4oalivtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-14"} {...others} />);
}

export default Component;
