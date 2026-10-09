import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_v0l2tzx.css';
import '../../css/z/z3zho9lws.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d_v0l2tzx"/><path class="z3zho9lws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-bolt-48"} {...others} />);
}

export default Component;
