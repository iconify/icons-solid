import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g5uo4_uhq.css';
import '../../css/r/rul77-bag.css';
import '../../css/r/rcikxbbjf.css';
import '../../css/u/uraewhabs.css';
import '../../css/h/hrfhhf0kt.css';
import '../../css/b/bymsh4bpi.css';
import '../../css/f/fcn9e1bfl.css';
import '../../css/c/c62i_jbbv.css';
import '../../css/p/p-2fj44yh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="g5uo4_uhq"/><path class="rul77-bag"/><path class="rcikxbbjf"/><path class="uraewhabs"/><path class="hrfhhf0kt"/><path class="bymsh4bpi"/><path class="fcn9e1bfl"/><path class="c62i_jbbv"/><path class="p-2fj44yh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:setting-config"} {...others} />);
}

export default Component;
