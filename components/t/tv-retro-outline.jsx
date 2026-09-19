import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sv_9e_bmt.css';
import '../../css/d/deafncc0t.css';
import '../../css/d/duhkb9blp.css';
import '../../css/n/nop9siewt.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sv_9e_bmt"/><path class="deafncc0t"/><path class="duhkb9blp"/><path class="nop9siewt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:tv-retro-outline"} {...others} />);
}

export default Component;
