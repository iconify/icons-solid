import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nffuxgb0d.css';
import '../../css/i/idjsc19lu.css';
import '../../css/j/jgg0-yb6i.css';
import '../../css/j/jz2ddmbaj.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="nffuxgb0d"/><path class="idjsc19lu"/><path class="jgg0-yb6i"/><path class="jz2ddmbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:bed-outline"} {...others} />);
}

export default Component;
