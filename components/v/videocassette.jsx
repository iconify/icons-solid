import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqml9ebok.css';
import '../../css/u/upcmvo0ue.css';
import '../../css/c/cykli6b5t.css';
import '../../css/t/t36-sgb6w.css';
import '../../css/y/ymafdgbrh.css';
import '../../css/x/xl0n6lbmh.css';
import '../../css/y/y-lj4kbnb.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/r/r9p5jubxx.css';
import '../../css/m/memu0ib5x.css';
import '../../css/v/vkc6uobsk.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cqml9ebok"/><path class="upcmvo0ue"/><path class="cykli6b5t"/><path class="t36-sgb6w"/><path class="ymafdgbrh"/><path class="xl0n6lbmh"/><path class="y-lj4kbnb"/><g class="ij2x_72vy"><path class="r9p5jubxx"/><path class="memu0ib5x"/><path class="vkc6uobsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:videocassette"} {...others} />);
}

export default Component;
