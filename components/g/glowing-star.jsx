import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-4g368hm.css';
import '../../css/s/s11f4ob4t.css';
import '../../css/e/ew4v2q7dx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="y-4g368hm"><path class="s11f4ob4t"/><path class="ew4v2q7dx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:glowing-star"} {...others} />);
}

export default Component;
