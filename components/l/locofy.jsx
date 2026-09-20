import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b16z9cbwi.css';
import '../../css/e/eihi2zo4h.css';

const viewBox = {"width":48.3,"height":48.3};
const content = `<g clip-rule="evenodd" class="d2kvgvbvc"><circle class="b16z9cbwi"/><path class="eihi2zo4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:locofy"} {...others} />);
}

export default Component;
