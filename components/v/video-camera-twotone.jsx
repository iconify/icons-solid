import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jib32ub8s.css';
import '../../css/q/qvm7p4brn.css';
import '../../css/d/d3r-gqy_o.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="jib32ub8s"/><path class="qvm7p4brn"/><path class="d3r-gqy_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:video-camera-twotone"} {...others} />);
}

export default Component;
