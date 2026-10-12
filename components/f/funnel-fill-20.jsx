import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai0frwm-h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ai0frwm-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:funnel-fill-20"} {...others} />);
}

export default Component;
