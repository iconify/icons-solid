import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj8rmnbdx.css';
import '../../css/b/brx3lrbll.css';
import '../../css/q/qa-v84whg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qj8rmnbdx"/><path class="brx3lrbll"/><path class="qa-v84whg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raspberry-pi"} {...others} />);
}

export default Component;
