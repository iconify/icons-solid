import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/m/myo7tqb8f.css';
import '../../css/b/b59cqdtuz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path clip-rule="evenodd" class="myo7tqb8f"/><path class="b59cqdtuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-europe-duo"} {...others} />);
}

export default Component;
