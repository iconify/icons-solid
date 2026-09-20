import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5e2kbc5z.css';
import '../../css/h/ho0k_acab.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/ijy0jnbrd.css';
import '../../css/i/i64oqpblh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="d5e2kbc5z"/><path class="ho0k_acab"/><g class="ij2x_72vy"><path class="ijy0jnbrd"/><path class="i64oqpblh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:check-mark-button"} {...others} />);
}

export default Component;
