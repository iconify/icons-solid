import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x4fvx1b_g.css';
import '../../css/i/ihw84wb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x4fvx1b_g"/><path class="ihw84wb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:lemon"} {...others} />);
}

export default Component;
