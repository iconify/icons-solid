import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpcjzhb8z.css';
import '../../css/i/in0d74b0s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rpcjzhb8z"/><path class="in0d74b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-constraint-48"} {...others} />);
}

export default Component;
