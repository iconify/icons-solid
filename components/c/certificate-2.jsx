import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsuyy7buq.css';
import '../../css/o/o0zu6cbvh.css';
import '../../css/w/wvnpjtbpx.css';
import '../../css/x/xwc_ctejz.css';
import '../../css/v/vd-lu3bad.css';
import '../../css/h/hxtk9gb4c.css';
import '../../css/y/yv8q34b7m.css';
import '../../css/n/nh-fn-ldt.css';
import '../../css/g/ghuth_p-e.css';
import '../../css/a/ad1us8bnc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wsuyy7buq"/><path class="o0zu6cbvh"/><path class="wvnpjtbpx"/><path class="xwc_ctejz"/><path class="vd-lu3bad"/><path class="hxtk9gb4c"/><path class="yv8q34b7m"/><path class="nh-fn-ldt"/><path class="ghuth_p-e"/><path class="ad1us8bnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:certificate-2"} {...others} />);
}

export default Component;
