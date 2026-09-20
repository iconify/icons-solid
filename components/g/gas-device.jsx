import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3wuugj7j.css';
import '../../css/a/ao9kt-k_q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j3wuugj7j"/><path class="ao9kt-k_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:gas-device"} {...others} />);
}

export default Component;
