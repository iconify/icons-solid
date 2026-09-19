import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n43ka5baq.css';
import '../../css/k/k4w_9bchn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="n43ka5baq"/><path class="k4w_9bchn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:bluetooth-connected"} {...others} />);
}

export default Component;
