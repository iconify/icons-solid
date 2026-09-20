import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/r/r73utib8z.css';
import '../../css/k/ki1zkpbpv.css';
import '../../css/b/btnne-b7c.css';
import '../../css/f/fdd-gmbjj.css';
import '../../css/r/r9l1he-gk.css';
import '../../css/z/zkedvwbve.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="r73utib8z"/><path class="ki1zkpbpv"/><g class="btnne-b7c"><path class="fdd-gmbjj"/><ellipse class="r9l1he-gk"/><path class="zkedvwbve"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-lesotho"} {...others} />);
}

export default Component;
