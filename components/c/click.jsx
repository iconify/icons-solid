import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/nwbhzkbcg.css';
import '../../css/s/ss7q9hbza.css';
import '../../css/c/c9-gn0brd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="nwbhzkbcg"/><path clip-rule="evenodd" class="ss7q9hbza"/><path class="c9-gn0brd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:click"} {...others} />);
}

export default Component;
