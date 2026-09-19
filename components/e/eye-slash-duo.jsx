import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxlk_nblr.css';
import '../../css/x/x1a5cg2bq.css';
import '../../css/w/wlgmf7bsm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="hxlk_nblr"/><path class="x1a5cg2bq"/><path class="wlgmf7bsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-slash-duo"} {...others} />);
}

export default Component;
