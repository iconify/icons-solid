import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/siwil0b_t.css';
import '../../css/n/nb9g40b3t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="siwil0b_t"/><path class="nb9g40b3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:ribbon"} {...others} />);
}

export default Component;
