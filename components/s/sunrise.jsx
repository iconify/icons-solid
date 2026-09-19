import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o9wu18b8o.css';
import '../../css/y/y3na3bixh.css';
import '../../css/g/guq76hb0b.css';
import '../../css/s/s5sg_kbpc.css';
import '../../css/r/rxcw4vv-i.css';
import '../../css/u/uwm-r4chq.css';
import '../../css/i/id0sphaif.css';
import '../../css/a/ar9o-jm9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="o9wu18b8o"/><path class="y3na3bixh"/><path class="guq76hb0b"/><path class="s5sg_kbpc"/><path class="rxcw4vv-i"/><path class="uwm-r4chq"/><path class="id0sphaif"/><path class="ar9o-jm9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sunrise"} {...others} />);
}

export default Component;
