import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcpth-wqs.css';
import '../../css/l/lk8duns4e.css';
import '../../css/q/qh9qlceui.css';
import '../../css/b/bf26-timb.css';
import '../../css/x/xz40dwu8u.css';
import '../../css/r/rhh2-24jb.css';
import '../../css/b/bdodzxjsg.css';
import '../../css/n/n7bys8ckd.css';
import '../../css/u/u5ytsccnl.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wcpth-wqs"/><path class="lk8duns4e"/><path class="qh9qlceui"/><ellipse class="bf26-timb"/><path class="xz40dwu8u"/><path class="rhh2-24jb"/><path class="bdodzxjsg"/><path class="n7bys8ckd"/><ellipse class="u5ytsccnl"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-ecuador"} {...others} />);
}

export default Component;
