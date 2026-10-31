import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fz9xol7fs.css';
import '../../css/z/zwm_h-62j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fz9xol7fs"/><path class="zwm_h-62j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:apple-logo-duocolor-round"} {...others} />);
}

export default Component;
