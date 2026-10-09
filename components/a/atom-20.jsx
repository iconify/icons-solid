import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx92tubqs.css';
import '../../css/l/lyyq3vb_a.css';
import '../../css/r/rrev3ybay.css';
import '../../css/t/tgoz9tbvp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vx92tubqs"/><path class="lyyq3vb_a"/><path class="rrev3ybay"/><path class="tgoz9tbvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:atom-20"} {...others} />);
}

export default Component;
