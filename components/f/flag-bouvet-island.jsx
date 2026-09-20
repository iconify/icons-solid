import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0bn-3b4l.css';
import '../../css/n/n2h26q2vi.css';
import '../../css/o/oskwyx3to.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="l0bn-3b4l"><path class="n2h26q2vi"/><path class="oskwyx3to"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-bouvet-island"} {...others} />);
}

export default Component;
