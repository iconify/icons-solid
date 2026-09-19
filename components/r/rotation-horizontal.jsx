import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p5vqfqg0x.css';
import '../../css/r/rm0qh6bub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="p5vqfqg0x"/><path class="rm0qh6bub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rotation-horizontal"} {...others} />);
}

export default Component;
