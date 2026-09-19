import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rq-hfbc3v.css';
import '../../css/q/qzbmf2tvd.css';
import '../../css/i/i-oj57g7w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rq-hfbc3v"/><path class="qzbmf2tvd"/><path class="i-oj57g7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:drone"} {...others} />);
}

export default Component;
