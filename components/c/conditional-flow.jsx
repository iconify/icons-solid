import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h855_yb2w.css';
import '../../css/v/vlrrqacry.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="h855_yb2w"/><path class="vlrrqacry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:conditional-flow"} {...others} />);
}

export default Component;
