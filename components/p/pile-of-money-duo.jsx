import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zikajmxqo.css';
import '../../css/a/ad0ji-ehx.css';
import '../../css/t/tznw8b5gy.css';
import '../../css/b/bd-x3y6-q.css';
import '../../css/t/t_l-nwjok.css';
import '../../css/u/u67b1plih.css';
import '../../css/p/p57feuzvv.css';
import '../../css/l/lui6y7bgd.css';
import '../../css/r/rropk-k7b.css';
import '../../css/n/ng-_rjb-g.css';
import '../../css/h/h0p7dwlcw.css';
import '../../css/u/uh2ouyier.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="zikajmxqo"><path class="ad0ji-ehx"/><path class="tznw8b5gy"/><path class="bd-x3y6-q"/><path class="t_l-nwjok"/><path class="u67b1plih"/><path class="p57feuzvv"/><path class="lui6y7bgd"/><path class="rropk-k7b"/><path class="ng-_rjb-g"/><path class="h0p7dwlcw"/><path class="uh2ouyier"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:pile-of-money-duo"} {...others} />);
}

export default Component;
