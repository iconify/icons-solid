import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jbw-75b4r.css';
import '../../css/i/io590qi1v.css';
import '../../css/r/rr4816wue.css';
import '../../css/e/ecwa0ccvm.css';
import '../../css/l/ll1q-cdxs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jbw-75b4r"/><path class="io590qi1v"/><circle class="rr4816wue"/><circle class="ecwa0ccvm"/><path class="ll1q-cdxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:steoller"} {...others} />);
}

export default Component;
