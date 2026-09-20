import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cbjpr_q5t.css';
import '../../css/j/justrdupm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cbjpr_q5t"/><path class="justrdupm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:parking-meter"} {...others} />);
}

export default Component;
