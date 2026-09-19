import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ii_d8kbgo.css';
import '../../css/i/if2tu-i3c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ii_d8kbgo"/><path class="if2tu-i3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:scale"} {...others} />);
}

export default Component;
