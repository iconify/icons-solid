import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0s6lrblp.css';
import '../../css/c/c7qj67bda.css';
import '../../css/a/asc6k5_su.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s0s6lrblp"/><rect class="c7qj67bda"/><path class="asc6k5_su"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-up-01"} {...others} />);
}

export default Component;
