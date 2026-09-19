import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bp52pyb7w.css';
import '../../css/b/bjfx3cb5v.css';
import '../../css/g/ggo73fn2o.css';
import '../../css/i/i9o_2wdta.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="bp52pyb7w"/><path clip-rule="evenodd" class="bjfx3cb5v"/><path class="ggo73fn2o"/><path clip-rule="evenodd" class="i9o_2wdta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:search-1-tint-outline"} {...others} />);
}

export default Component;
