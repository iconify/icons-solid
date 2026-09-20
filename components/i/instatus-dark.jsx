import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/g/gxkecnj9n.css';
import '../../css/k/klt6blsnp.css';
import '../../css/w/wmna4xjxd.css';

const viewBox = {"width":216,"height":256};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGgKyaicsR)" class="n1mjunbsu"><path class="gxkecnj9n"/><path class="klt6blsnp"/></g><defs><clipPath id="SVGgKyaicsR"><path class="wmna4xjxd"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:instatus-dark"} {...others} />);
}

export default Component;
