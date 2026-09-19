import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/syqwyou8e.css';
import '../../css/k/kvzo1egcq.css';
import '../../css/i/iycsllbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="syqwyou8e"/><path class="kvzo1egcq"/><path class="iycsllbsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-target"} {...others} />);
}

export default Component;
