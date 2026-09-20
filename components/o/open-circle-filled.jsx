import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/c/cbvjzsq1u.css';
import '../../css/h/hdc_1zb4r.css';
import '../../css/u/u7b6urb1h.css';
import '../../css/s/shmz7ob_a.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="cbvjzsq1u"/><path class="hdc_1zb4r"/><path class="u7b6urb1h"/><path class="shmz7ob_a"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:open-circle-filled"} {...others} />);
}

export default Component;
