import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrgw_-b1m.css';
import '../../css/b/bc47oi3ue.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrgw_-b1m"/><path class="bc47oi3ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:copy-24"} {...others} />);
}

export default Component;
