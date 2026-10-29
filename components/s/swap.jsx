import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atx4xo3tt.css';
import '../../css/r/raqjw8qai.css';
import '../../css/i/icau_dbsb.css';
import '../../css/h/h2hrek05b.css';
import '../../css/j/joam-5_zu.css';
import '../../css/h/h-fyorb5o.css';
import '../../css/v/vk578b7qr.css';
import '../../css/b/bkmq-xbmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="atx4xo3tt wm-k"/><path class="raqjw8qai wm-k"/><path class="icau_dbsb wm-k"/><path class="h2hrek05b wm-shine"/><path class="joam-5_zu wm-a"/><path class="h-fyorb5o wm-a"/><path class="vk578b7qr wm-a"/><path class="bkmq-xbmk wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:swap"} {...others} />);
}

export default Component;
