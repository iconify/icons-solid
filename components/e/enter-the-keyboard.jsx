import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rvg52ipun.css';
import '../../css/u/uhrp6ebbg.css';
import '../../css/l/lv4k99bmg.css';
import '../../css/q/qtfn6f5-x.css';
import '../../css/r/r4d67lbcz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="rvg52ipun"/><path class="uhrp6ebbg"/><path class="lv4k99bmg"/><path class="qtfn6f5-x"/><path class="r4d67lbcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:enter-the-keyboard"} {...others} />);
}

export default Component;
