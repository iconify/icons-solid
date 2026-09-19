import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/y7nwf97xa.css';
import '../../css/p/p_lzu_bcm.css';
import '../../css/o/ovbjaibzx.css';
import '../../css/a/avzl_8b-q.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="y7nwf97xa"/><path class="p_lzu_bcm"/><path class="ovbjaibzx"/><path class="avzl_8b-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunrise-outline"} {...others} />);
}

export default Component;
