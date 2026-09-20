import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qml99rnqd.css';
import '../../css/i/imcjgjb4f.css';
import '../../css/f/flzkd7s7q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qml99rnqd"/><path class="imcjgjb4f"/><path class="flzkd7s7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:issue-locked-16"} {...others} />);
}

export default Component;
