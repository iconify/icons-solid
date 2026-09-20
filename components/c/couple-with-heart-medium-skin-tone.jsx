import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bpl-buwfn.css';
import '../../css/c/c7h2m3bhv.css';
import '../../css/k/k2n2_ew4c.css';
import '../../css/h/hkkw_7hvk.css';
import '../../css/y/yinqz0wlr.css';
import '../../css/q/qq0zs63-i.css';
import '../../css/e/egdtubl0q.css';
import '../../css/h/h976q0bpi.css';
import '../../css/q/q8udlte8p.css';
import '../../css/u/uztq185ac.css';
import '../../css/i/ibfllzbac.css';
import '../../css/x/xv-don-_s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bpl-buwfn"/><path class="c7h2m3bhv"/><path class="k2n2_ew4c"/><path class="hkkw_7hvk"/><path class="yinqz0wlr"/><path class="qq0zs63-i"/><path class="egdtubl0q"/><path class="h976q0bpi"/><path class="q8udlte8p"/><path class="uztq185ac"/><path class="ibfllzbac"/><path class="xv-don-_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:couple-with-heart-medium-skin-tone"} {...others} />);
}

export default Component;
