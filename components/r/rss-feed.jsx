import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6fzr233t.css';
import '../../css/x/xe8h0abgh.css';
import '../../css/q/qkg71bvse.css';
import '../../css/j/j_9ap0qlq.css';
import '../../css/x/xm-ksac4e.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="l6fzr233t"/><path class="xe8h0abgh"/><path class="qkg71bvse"/><path class="j_9ap0qlq"/><path class="xm-ksac4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:rss-feed"} {...others} />);
}

export default Component;
