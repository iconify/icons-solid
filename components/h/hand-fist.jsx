import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qm_r6kbre.css';
import '../../css/z/zm6qctb6k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qm_r6kbre"/><path class="zm6qctb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand-fist"} {...others} />);
}

export default Component;
