import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnbjef5ys.css';
import '../../css/s/sae_6acyt.css';
import '../../css/q/qc0lnbpwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bnbjef5ys"/><path class="sae_6acyt"/><path class="qc0lnbpwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-search"} {...others} />);
}

export default Component;
