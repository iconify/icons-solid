import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/eemwaab5j.css';
import '../../css/l/l1tjz6bep.css';
import '../../css/l/l3aiq-bqz.css';
import '../../css/b/bi5px2mad.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="eemwaab5j"/><path class="l1tjz6bep"/><path class="l3aiq-bqz"/><path class="bi5px2mad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:skull-outline"} {...others} />);
}

export default Component;
