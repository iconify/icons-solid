import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0oxfv-jn.css';
import '../../css/y/yf-k82b-b.css';
import '../../css/k/krcvqcb-l.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="o0oxfv-jn"/><circle class="yf-k82b-b"/><path class="krcvqcb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:support-vector-machine"} {...others} />);
}

export default Component;
