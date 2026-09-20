import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqqwh7w1i.css';
import '../../css/b/b8nn58b7g.css';
import '../../css/k/kskmi_bqr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f5egfw3ss.css';
import '../../css/t/t7amedcuj.css';
import '../../css/c/ccs-lpwmj.css';
import '../../css/d/d3i4w718l.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="sqqwh7w1i"><path class="b8nn58b7g"/><path class="kskmi_bqr"/></g><g class="jn8qy4bru"><path class="f5egfw3ss"/><path class="t7amedcuj"/><path class="ccs-lpwmj"/><path class="d3i4w718l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:link"} {...others} />);
}

export default Component;
