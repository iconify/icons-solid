import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jb-6bbccy.css';
import '../../css/v/v68-p4tdh.css';
import '../../css/c/cqtyi9boj.css';
import '../../css/l/lr1twzbxz.css';
import '../../css/h/hpygl8bsp.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="jb-6bbccy"/><path class="v68-p4tdh"/><path class="cqtyi9boj"/><path class="lr1twzbxz"/><path class="hpygl8bsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:fj"} {...others} />);
}

export default Component;
