import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db3ssmd3t.css';
import '../../css/b/bvn70c7ka.css';
import '../../css/r/roqwiebga.css';
import '../../css/d/dig8acc1g.css';
import '../../css/s/san_xbb0s.css';
import '../../css/z/zuyihnbxi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="db3ssmd3t"/><path class="bvn70c7ka"/><path class="roqwiebga"/><path class="dig8acc1g"/><path class="san_xbb0s"/><path class="zuyihnbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-outlook-dark"} {...others} />);
}

export default Component;
