import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij883nb6j.css';
import '../../css/n/ninqfyb4i.css';
import '../../css/w/wkizchjmy.css';
import '../../css/r/rau80ob0u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ij883nb6j"/><path clip-rule="evenodd" class="ninqfyb4i"/><path class="wkizchjmy"/><path class="rau80ob0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-africa-duo"} {...others} />);
}

export default Component;
