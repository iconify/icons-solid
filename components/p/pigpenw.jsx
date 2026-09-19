import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai9xlqx-q.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="ai9xlqx-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pigpenw"} {...others} />);
}

export default Component;
