import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq1bfqbrr.css';
import '../../css/z/z46cr5nmt.css';
import '../../css/y/yp1e1u17q.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/r/r9sysz75i.css';
import '../../css/q/qnkyr2bgp.css';
import '../../css/v/v8_fesbsg.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="hq1bfqbrr"><path class="z46cr5nmt"/><circle class="yp1e1u17q"/></g><g class="brzn_0bpr"><circle class="r9sysz75i"/><path class="qnkyr2bgp"/><path class="v8_fesbsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-standing-light-skin-tone"} {...others} />);
}

export default Component;
