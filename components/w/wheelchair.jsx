import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bo0gd_fua.css';
import '../../css/i/itwm8w2av.css';
import '../../css/q/qub3njx_o.css';
import '../../css/w/wmsnpobfq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="bo0gd_fua"/><path class="itwm8w2av"/><path class="qub3njx_o"/><path class="wmsnpobfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:wheelchair"} {...others} />);
}

export default Component;
