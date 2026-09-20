import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gw1m5_b6h.css';
import '../../css/j/j1e9bv-lb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gw1m5_b6h"/><rect class="j1e9bv-lb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:card-sim"} {...others} />);
}

export default Component;
