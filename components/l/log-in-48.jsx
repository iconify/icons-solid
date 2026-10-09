import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b49o_bc6g.css';
import '../../css/b/bbwnydn9j.css';
import '../../css/q/qj6pinbyz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="b49o_bc6g"/><path class="bbwnydn9j"/><path class="qj6pinbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:log-in-48"} {...others} />);
}

export default Component;
