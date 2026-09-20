import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfqgc9bqn.css';

const viewBox = {"width":841.89,"height":595.28};
const content = `<path class="wfqgc9bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:xai-grok-light"} {...others} />);
}

export default Component;
