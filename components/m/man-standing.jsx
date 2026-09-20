import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/f/fv33nkbrq.css';
import '../../css/y/yp1e1u17q.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/r/r9sysz75i.css';
import '../../css/z/zrjvghb_r.css';
import '../../css/a/auj8qbcan.css';
import '../../css/f/f3koplb3g.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><path class="fv33nkbrq"/><circle class="yp1e1u17q"/></g><g class="brzn_0bpr"><circle class="r9sysz75i"/><path class="zrjvghb_r"/><path class="auj8qbcan"/><path class="f3koplb3g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-standing"} {...others} />);
}

export default Component;
