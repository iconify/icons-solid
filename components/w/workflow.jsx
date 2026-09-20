import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j4kl21b2v.css';
import '../../css/c/ce22cyb5j.css';
import '../../css/s/sqw8o7bkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="j4kl21b2v"/><path class="ce22cyb5j"/><rect class="sqw8o7bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:workflow"} {...others} />);
}

export default Component;
