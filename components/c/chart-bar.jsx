import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onlbud-6m.css';
import '../../css/z/z3dt8qrmb.css';
import '../../css/l/ljw94hbdi.css';
import '../../css/m/mn_fpfo9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="onlbud-6m wm-k"/><path class="wm-k z3dt8qrmb"/><path class="ljw94hbdi wm-k"/><path class="mn_fpfo9f wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-bar"} {...others} />);
}

export default Component;
