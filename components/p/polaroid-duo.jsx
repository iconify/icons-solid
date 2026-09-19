import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eb06skzns.css';
import '../../css/p/p9r-y4bkv.css';
import '../../css/j/jv0_-ib2k.css';
import '../../css/r/rxq99xbck.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="eb06skzns"/><path class="p9r-y4bkv"/><path class="jv0_-ib2k"/><path class="rxq99xbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:polaroid-duo"} {...others} />);
}

export default Component;
