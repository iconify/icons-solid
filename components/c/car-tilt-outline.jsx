import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uolcnlt1k.css';
import '../../css/g/gou96pycw.css';
import '../../css/x/xv28_v7yy.css';
import '../../css/w/wp_uj4b0l.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="uolcnlt1k"/><path class="gou96pycw"/><path class="xv28_v7yy"/><path class="wp_uj4b0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:car-tilt-outline"} {...others} />);
}

export default Component;
