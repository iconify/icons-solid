import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmikwmbtn.css';
import '../../css/s/sryxx_bpz.css';
import '../../css/w/wryx67bub.css';
import '../../css/s/s6vgiefch.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hmikwmbtn"/><path clip-rule="evenodd" class="sryxx_bpz"/><path class="wryx67bub"/><path clip-rule="evenodd" class="s6vgiefch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:heart-sparkles-outline"} {...others} />);
}

export default Component;
