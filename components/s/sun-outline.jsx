import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dazc_hbbb.css';
import '../../css/i/iybw-7did.css';
import '../../css/z/z63rirbsm.css';
import '../../css/f/fn4mlcb1l.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dazc_hbbb"/><path class="iybw-7did"/><path class="z63rirbsm"/><path class="fn4mlcb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sun-outline"} {...others} />);
}

export default Component;
