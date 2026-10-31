import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l0qm7i0mg.css';
import '../../css/v/vy7vn8b1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l0qm7i0mg"/><path class="vy7vn8b1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zoom-out-duocolor-round"} {...others} />);
}

export default Component;
