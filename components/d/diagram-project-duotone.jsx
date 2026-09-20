import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tq3id0t8d.css';
import '../../css/v/vo_5k3bvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tq3id0t8d"/><path class="vo_5k3bvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:diagram-project-duotone"} {...others} />);
}

export default Component;
