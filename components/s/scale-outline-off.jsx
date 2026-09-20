import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ebg_1ub8s.css';
import '../../css/u/ufh-d8b8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ebg_1ub8s"/><path class="ufh-d8b8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:scale-outline-off"} {...others} />);
}

export default Component;
