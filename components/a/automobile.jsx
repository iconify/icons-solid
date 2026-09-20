import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e4tmswb0m.css';
import '../../css/w/wwkh0qyns.css';
import '../../css/f/fyuqa_brb.css';
import '../../css/v/v9k152bju.css';
import '../../css/o/oya7mqb-g.css';
import '../../css/g/gbtpgtb-i.css';
import '../../css/k/k7wflacid.css';
import '../../css/t/tl351tbuy.css';
import '../../css/y/y95wxjd-y.css';
import '../../css/s/s85tacbwg.css';
import '../../css/g/gvyy03b8q.css';
import '../../css/g/gc4y78bxd.css';
import '../../css/d/d5kyh0bmp.css';
import '../../css/a/aa3lr1bnn.css';
import '../../css/m/mi_48hsrv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e4tmswb0m"/><path class="wwkh0qyns"/><path class="fyuqa_brb"/><path class="v9k152bju"/><path class="oya7mqb-g"/><path class="gbtpgtb-i"/><path class="k7wflacid"/><path class="tl351tbuy"/><path class="y95wxjd-y"/><path class="s85tacbwg"/><path class="gvyy03b8q"/><path class="gc4y78bxd"/><path class="d5kyh0bmp"/><path class="aa3lr1bnn"/><path class="mi_48hsrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:automobile"} {...others} />);
}

export default Component;
