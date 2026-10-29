import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vpio5fw1m.css';
import '../../css/i/i-hwwyqmh.css';
import '../../css/a/aj64kf97i.css';
import '../../css/i/ix2rklbns.css';
import '../../css/p/p93mfqadc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vpio5fw1m wm-k"/><path class="i-hwwyqmh wm-k"/><path class="aj64kf97i wm-s"/><path class="ix2rklbns"/><path class="p93mfqadc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:image-sparkles"} {...others} />);
}

export default Component;
