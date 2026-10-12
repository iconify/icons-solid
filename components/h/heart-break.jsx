import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cv2gmabgi.css';
import '../../css/c/c-f4x5bus.css';
import '../../css/f/fsnrxv-br.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cv2gmabgi"/><path class="c-f4x5bus"/><path class="fsnrxv-br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:heart-break"} {...others} />);
}

export default Component;
