import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ub620cbcb.css';
import '../../css/s/s4v5vq33h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ub620cbcb"/><rect class="s4v5vq33h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:memory-stick"} {...others} />);
}

export default Component;
