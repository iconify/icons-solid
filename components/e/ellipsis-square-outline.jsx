import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6is9abdc.css';
import '../../css/d/d7g8dkb9v.css';
import '../../css/t/tya6-qb2l.css';
import '../../css/q/q7_qpybbv.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n6is9abdc"/><path class="d7g8dkb9v"/><path class="tya6-qb2l"/><path class="q7_qpybbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:ellipsis-square-outline"} {...others} />);
}

export default Component;
