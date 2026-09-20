import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kt6l5389a.css';
import '../../css/p/pgsjzwb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kt6l5389a"/><path class="pgsjzwb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lifebuoy-off"} {...others} />);
}

export default Component;
