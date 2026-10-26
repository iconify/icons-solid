import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/y/y49qhzb8j.css';
import '../../css/z/zqqu-xq9s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="y49qhzb8j"/><path class="zqqu-xq9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:copy"} {...others} />);
}

export default Component;
