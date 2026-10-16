import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jqyxvub6s.css';
import '../../css/k/klxq62e5o.css';

const viewBox = {"width":156,"height":41};
const content = `<g class="n1mjunbsu"><g clip-path="url(#SVGukZmTdcY)"><path class="jqyxvub6s"/></g><defs><clipPath id="SVGukZmTdcY"><path class="klxq62e5o"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:browserless-dark"} {...others} />);
}

export default Component;
