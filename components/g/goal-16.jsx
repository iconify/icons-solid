import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as1j4ndtg.css';
import '../../css/q/qyo4u7bbg.css';
import '../../css/b/bc1hhwfbt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="as1j4ndtg"/><path class="qyo4u7bbg"/><path class="bc1hhwfbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:goal-16"} {...others} />);
}

export default Component;
