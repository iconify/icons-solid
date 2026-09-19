import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8x1ld79b.css';
import '../../css/e/ei3fsyb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k8x1ld79b"/><path class="ei3fsyb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bed"} {...others} />);
}

export default Component;
