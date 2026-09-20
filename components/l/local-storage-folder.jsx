import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2berc3wk.css';
import '../../css/i/iejh_l4xs.css';
import '../../css/i/ixw8vxb1o.css';
import '../../css/w/wcs_7orjo.css';
import '../../css/b/bbh3o_bou.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e2berc3wk"/><path class="iejh_l4xs"/><path class="ixw8vxb1o"/><path class="wcs_7orjo"/><path class="bbh3o_bou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:local-storage-folder"} {...others} />);
}

export default Component;
