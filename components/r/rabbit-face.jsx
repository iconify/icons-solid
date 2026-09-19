import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjfuc-mne.css';
import '../../css/n/nozcax5vd.css';
import '../../css/g/gmb-oacwu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="bjfuc-mne"/><path class="nozcax5vd"/><path class="gmb-oacwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:rabbit-face"} {...others} />);
}

export default Component;
