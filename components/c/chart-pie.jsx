import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm66mfb8k.css';
import '../../css/k/k7rdutbey.css';
import '../../css/d/d1vzate5o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fm66mfb8k wm-k"/><path class="k7rdutbey wm-k"/><path class="d1vzate5o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-pie"} {...others} />);
}

export default Component;
