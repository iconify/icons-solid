import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/koptpmbha.css';
import '../../css/x/xq1fy2kwk.css';
import '../../css/x/x2vrhubgi.css';
import '../../css/w/wjj2bct6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="koptpmbha"/><rect transform="matrix(1 0 0 -1 1.76 22.27)" class="xq1fy2kwk"/><path class="x2vrhubgi"/><path class="wjj2bct6f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:copy-text"} {...others} />);
}

export default Component;
