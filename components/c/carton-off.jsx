import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ijz_yimnl.css';
import '../../css/q/q-q5x1yxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ijz_yimnl"/><path class="q-q5x1yxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:carton-off"} {...others} />);
}

export default Component;
