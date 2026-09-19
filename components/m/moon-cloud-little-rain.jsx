import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w0n0gzb6b.css';
import '../../css/t/t1bp93bkt.css';
import '../../css/h/hagc2nfwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w0n0gzb6b"/><path class="t1bp93bkt"/><path class="hagc2nfwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:moon-cloud-little-rain"} {...others} />);
}

export default Component;
