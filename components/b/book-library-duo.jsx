import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/y/ytrzu0bnv.css';
import '../../css/e/ebk5plblt.css';
import '../../css/x/xww1raceb.css';
import '../../css/j/jb8k30byf.css';
import '../../css/w/woihu3bvu.css';
import '../../css/e/e4333xbjr.css';
import '../../css/g/geo70jbmy.css';
import '../../css/r/rau942bmd.css';
import '../../css/l/ld-3ezxhi.css';
import '../../css/n/netvhjyhu.css';
import '../../css/z/zpqxxdbkp.css';
import '../../css/x/xh3s9z5ri.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="ytrzu0bnv"/><path class="ebk5plblt"/><path class="xww1raceb"/><path class="jb8k30byf"/><path class="woihu3bvu"/><path class="e4333xbjr"/><path class="geo70jbmy"/><path class="rau942bmd"/><path class="ld-3ezxhi"/><path class="netvhjyhu"/><path class="zpqxxdbkp"/><path class="xh3s9z5ri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:book-library-duo"} {...others} />);
}

export default Component;
