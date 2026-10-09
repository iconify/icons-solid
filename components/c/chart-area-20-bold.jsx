import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aezfh675b.css';
import '../../css/x/x-kkv_b_v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aezfh675b"/><path class="x-kkv_b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-area-20-bold"} {...others} />);
}

export default Component;
