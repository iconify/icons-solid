import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9czz4bal.css';
import '../../css/w/wm92jmbcq.css';
import '../../css/s/sptv1_b8r.css';
import '../../css/q/qmhwjfbmi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d9czz4bal"/><path class="wm92jmbcq"/><path class="sptv1_b8r"/><path class="qmhwjfbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ventilation-48"} {...others} />);
}

export default Component;
