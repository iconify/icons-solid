import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxmcm_3pm.css';
import '../../css/k/kzapl5byq.css';
import '../../css/c/caqj00b7q.css';
import '../../css/x/xi9arj-ik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lxmcm_3pm"/><path class="kzapl5byq"/><path class="caqj00b7q"/><path class="xi9arj-ik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-broken"} {...others} />);
}

export default Component;
