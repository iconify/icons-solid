import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ka9t6t5bz.css';
import '../../css/t/tap_1wbud.css';
import '../../css/o/ofz1fackm.css';

const viewBox = {"width":37.351,"height":45,"left":7.056,"top":3};
const content = `<g xmlns="http://www.w3.org/2000/svg"><path class="ka9t6t5bz"/><path class="tap_1wbud"/><path class="ofz1fackm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:paypal"} {...others} />);
}

export default Component;
