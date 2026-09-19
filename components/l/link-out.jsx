import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ilzfx0bqm.css';
import '../../css/h/hpbbdncdf.css';
import '../../css/c/cgu57bbtc.css';
import '../../css/l/l-f7p5bdh.css';
import '../../css/q/qst3jj07t.css';
import '../../css/p/p3rvo5btl.css';
import '../../css/q/qki9yybzl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ilzfx0bqm"/><path class="hpbbdncdf"/><path class="cgu57bbtc"/><path class="l-f7p5bdh"/><path class="qst3jj07t"/><path class="p3rvo5btl"/><path class="qki9yybzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:link-out"} {...others} />);
}

export default Component;
