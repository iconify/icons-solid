import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/h/hun840bmm.css';
import '../../css/h/hqksykb5m.css';
import '../../css/f/f802_lbhz.css';
import '../../css/x/xjmot7b7v.css';
import '../../css/j/j_d0pwf7d.css';
import '../../css/e/emxrbhbtk.css';
import '../../css/t/tcwwm530t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="hun840bmm"/><path class="hqksykb5m"/><path class="f802_lbhz"/><path class="xjmot7b7v"/><path class="j_d0pwf7d"/><path class="emxrbhbtk"/><path class="tcwwm530t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bank"} {...others} />);
}

export default Component;
