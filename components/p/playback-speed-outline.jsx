import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed_xxmoki.css';
import '../../css/d/d8t8m2dfl.css';
import '../../css/x/xoewxkryu.css';
import '../../css/d/de2eu9b8o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ed_xxmoki"/><path clip-rule="evenodd" class="d8t8m2dfl"/><path class="xoewxkryu"/><path clip-rule="evenodd" class="de2eu9b8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:playback-speed-outline"} {...others} />);
}

export default Component;
