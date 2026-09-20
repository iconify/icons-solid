import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv4okzb9c.css';
import '../../css/a/a4-55kp-q.css';
import '../../css/h/hfq1g2m9c.css';
import '../../css/b/buu3hfbhj.css';
import '../../css/w/wi-_h-lba.css';
import '../../css/q/qow3i6bxa.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pv4okzb9c"/><path class="a4-55kp-q"/><path class="hfq1g2m9c"/><path class="buu3hfbhj"/><path class="wi-_h-lba"/><path class="qow3i6bxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:northeast-pointing-airplane"} {...others} />);
}

export default Component;
