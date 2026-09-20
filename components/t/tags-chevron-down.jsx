import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vt6cmib4p.css';
import '../../css/t/t5yzvxbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vt6cmib4p"/><path class="t5yzvxbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tags-chevron-down"} {...others} />);
}

export default Component;
