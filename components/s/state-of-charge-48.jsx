import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rplblqbon.css';
import '../../css/n/nlh68myqj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rplblqbon"/><path class="nlh68myqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:state-of-charge-48"} {...others} />);
}

export default Component;
