import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i9b01cczl.css';
import '../../css/g/g-hkusb1e.css';
import '../../css/q/q8zi9ob1b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="i9b01cczl"/><path class="g-hkusb1e"/><path class="q8zi9ob1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-biking"} {...others} />);
}

export default Component;
