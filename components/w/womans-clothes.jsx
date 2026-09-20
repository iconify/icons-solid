import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qspb1lbmq.css';
import '../../css/p/p8bfhb_ey.css';
import '../../css/q/qfkkidbnj.css';
import '../../css/x/xh3_rbcoa.css';
import '../../css/w/w9cdt8bpb.css';
import '../../css/e/e8yzzwyzq.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/e/e7-ncfr-q.css';
import '../../css/x/xs43o2bhr.css';
import '../../css/t/tpockcc1k.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qspb1lbmq"/><path class="p8bfhb_ey"/><path class="qfkkidbnj"/><path class="xh3_rbcoa"/><path class="w9cdt8bpb"/><path class="e8yzzwyzq"/><g class="rpvb-o6bq"><path class="e7-ncfr-q"/><path class="xs43o2bhr"/><path class="tpockcc1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:womans-clothes"} {...others} />);
}

export default Component;
