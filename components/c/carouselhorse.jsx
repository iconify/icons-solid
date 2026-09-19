import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt7_occ3g.css';
import '../../css/n/nfwawk86r.css';
import '../../css/q/qze6w1bql.css';
import '../../css/g/g80bucbun.css';
import '../../css/d/d440ukbej.css';
import '../../css/t/tiyhd5-fi.css';
import '../../css/i/i8zlr-bui.css';
import '../../css/s/szyeij9-w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vt7_occ3g"/><path class="nfwawk86r"/><path class="qze6w1bql"/><path class="g80bucbun"/><path class="d440ukbej"/><path class="tiyhd5-fi"/><path class="i8zlr-bui"/><path class="szyeij9-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:carouselhorse"} {...others} />);
}

export default Component;
