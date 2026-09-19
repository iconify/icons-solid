import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljooo8b3v.css';
import '../../css/w/w-nfzkbbs.css';
import '../../css/o/o4i4albyg.css';
import '../../css/a/a6_r71bql.css';
import '../../css/k/k-fnlibwc.css';
import '../../css/a/a_il-ki_o.css';
import '../../css/q/qt2v1ib0d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ljooo8b3v"/><path class="w-nfzkbbs"/><path class="o4i4albyg"/><path class="a6_r71bql"/><path class="k-fnlibwc"/><path class="a_il-ki_o"/><path class="qt2v1ib0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:six-points"} {...others} />);
}

export default Component;
