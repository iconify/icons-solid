import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrzzj06nr.css';
import '../../css/x/xvs47lv8y.css';
import '../../css/a/awrj17bcs.css';
import '../../css/r/r2dqdacfq.css';

const viewBox = {"width":126.7,"height":116.85};
const content = `<path class="mrzzj06nr"/><path class="xvs47lv8y"/><path class="awrj17bcs"/><path class="r2dqdacfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kubescape-dark"} {...others} />);
}

export default Component;
