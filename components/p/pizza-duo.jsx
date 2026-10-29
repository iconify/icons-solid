import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yt8n_ixwx.css';
import '../../css/m/miaw0lbio.css';
import '../../css/k/kzqm9y_ar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yt8n_ixwx"/><path class="miaw0lbio wm-a"/><path class="kzqm9y_ar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pizza-duo"} {...others} />);
}

export default Component;
