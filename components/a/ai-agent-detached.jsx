import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7o6ebmtf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="e7o6ebmtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-agent-detached"} {...others} />);
}

export default Component;
