import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oc6clwbls.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oc6clwbls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:closed-captioning-ai-line"} {...others} />);
}

export default Component;
