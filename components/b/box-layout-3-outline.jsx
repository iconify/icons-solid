import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jrpkb3kfl.css';
import '../../css/y/yitj2s91n.css';
import '../../css/o/ohvbfvvzq.css';
import '../../css/l/lg8zct3ui.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jrpkb3kfl"/><path class="yitj2s91n"/><path class="ohvbfvvzq"/><path class="lg8zct3ui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-layout-3-outline"} {...others} />);
}

export default Component;
