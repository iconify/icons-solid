import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x5vgy2b_q.css';
import '../../css/k/k3w-1mhgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x5vgy2b_q"/><path class="k3w-1mhgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:snail"} {...others} />);
}

export default Component;
