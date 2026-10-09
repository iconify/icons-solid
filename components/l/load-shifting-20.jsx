import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fl-um2bwn.css';
import '../../css/x/xhea0tlij.css';
import '../../css/j/j9rmcs4ak.css';
import '../../css/j/jufp2rs3q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fl-um2bwn"/><path class="xhea0tlij"/><path class="j9rmcs4ak"/><path class="jufp2rs3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:load-shifting-20"} {...others} />);
}

export default Component;
