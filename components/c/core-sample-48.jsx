import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5g_98bjs.css';
import '../../css/i/ibk4nlb7s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s5g_98bjs"/><path class="ibk4nlb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:core-sample-48"} {...others} />);
}

export default Component;
