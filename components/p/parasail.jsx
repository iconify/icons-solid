import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k2c5b0bpi.css';
import '../../css/t/tx67j0bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="k2c5b0bpi"/><path clip-rule="evenodd" class="tx67j0bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:parasail"} {...others} />);
}

export default Component;
