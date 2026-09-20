import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/t/t6f-mh9if.css';
import '../../css/c/cqi1zgbhv.css';
import '../../css/p/p2oc25btv.css';

const viewBox = {"width":57,"height":64};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGbOwSue2M)" class="n1mjunbsu"><path class="t6f-mh9if"/><path class="cqi1zgbhv"/></g><defs><clipPath id="SVGbOwSue2M"><path class="p2oc25btv"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:qdrant-dark"} {...others} />);
}

export default Component;
