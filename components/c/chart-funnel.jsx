import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arka26qxa.css';
import '../../css/f/fi7v9gbwz.css';
import '../../css/r/ret3hccpf.css';
import '../../css/s/ss2rsyb5w.css';
import '../../css/h/h47i1g-2m.css';
import '../../css/d/didlz4b-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="arka26qxa wm-k"/><path class="fi7v9gbwz wm-k"/><path class="ret3hccpf wm-k"/><path class="ss2rsyb5w wm-k"/><path class="h47i1g-2m wm-shine"/><path class="didlz4b-o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chart-funnel"} {...others} />);
}

export default Component;
