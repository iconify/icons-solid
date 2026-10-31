import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mglosereo.css';
import '../../css/d/d55t8r3lu.css';
import '../../css/s/szfyo-b8a.css';
import '../../css/n/n8n743bki.css';
import '../../css/n/nn7rqpb2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mglosereo wm-shadow"/><path class="d55t8r3lu"/><path class="szfyo-b8a"/><path class="n8n743bki"/><path class="nn7rqpb2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:monitor"} {...others} />);
}

export default Component;
