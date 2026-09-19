import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbcxssvae.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="lbcxssvae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:start-event-non-interrupting"} {...others} />);
}

export default Component;
