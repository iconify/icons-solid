import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_cp8gbnb.css';
import '../../css/t/t-7xstbgc.css';
import '../../css/t/tmav-mb2k.css';
import '../../css/i/imukq7b6n.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h_cp8gbnb"/><path clip-rule="evenodd" class="t-7xstbgc"/><path class="tmav-mb2k"/><path clip-rule="evenodd" class="imukq7b6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sd-card-1-outline"} {...others} />);
}

export default Component;
