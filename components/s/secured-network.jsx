import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zdhvhb4hv.css';
import '../../css/r/rhpb7tbqf.css';
import '../../css/u/u_fqmub8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zdhvhb4hv"/><path class="rhpb7tbqf"/><path class="u_fqmub8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:secured-network"} {...others} />);
}

export default Component;
