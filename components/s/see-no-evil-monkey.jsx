import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyd0_bbhm.css';
import '../../css/v/vq3qlq3nl.css';
import '../../css/d/dfftxlbyu.css';
import '../../css/a/angbexg4q.css';
import '../../css/u/uk-gnfb8r.css';
import '../../css/u/u8ng01bgo.css';
import '../../css/r/rtgywbbpw.css';
import '../../css/d/d9xylcoys.css';
import '../../css/s/s_f6m4b-b.css';
import '../../css/e/eavup7qou.css';
import '../../css/f/f1q17nb8w.css';
import '../../css/i/ihtv6pvrs.css';
import '../../css/y/yfdal9bth.css';
import '../../css/v/v5ri_9bht.css';
import '../../css/x/x_uldkbss.css';
import '../../css/u/u7_lhacqb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yyd0_bbhm"/><path class="vq3qlq3nl"/><path class="dfftxlbyu"/><path class="angbexg4q"/><path class="uk-gnfb8r"/><path class="u8ng01bgo"/><path class="rtgywbbpw"/><path class="d9xylcoys"/><path class="s_f6m4b-b"/><path class="eavup7qou"/><path class="f1q17nb8w"/><path class="ihtv6pvrs"/><path class="yfdal9bth"/><path class="v5ri_9bht"/><path class="x_uldkbss"/><path class="u7_lhacqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:see-no-evil-monkey"} {...others} />);
}

export default Component;
