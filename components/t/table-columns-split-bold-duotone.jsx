import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/n22hjzb2q.css';
import '../../css/a/ah7jg9a2e.css';
import '../../css/f/fly9otqib.css';
import '../../css/y/yv3_nhb2n.css';
import '../../css/q/qv07b1bbr.css';
import '../../css/n/nqr4yxb9r.css';
import '../../css/o/ol11kpbfc.css';
import '../../css/f/fngg_dbkn.css';
import '../../css/g/gcctpwkja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="n22hjzb2q"/><path class="ah7jg9a2e"/></g><path class="fly9otqib"/><path class="yv3_nhb2n"/><path class="qv07b1bbr"/><path class="nqr4yxb9r"/><path class="ol11kpbfc"/><path class="fngg_dbkn"/><path class="gcctpwkja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-columns-split-bold-duotone"} {...others} />);
}

export default Component;
