import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvu_v82pz.css';
import '../../css/n/ngrn2vb2g.css';
import '../../css/m/mlbyze8aq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xvu_v82pz"/><circle class="ngrn2vb2g"/><circle class="mlbyze8aq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:circle-scan"} {...others} />);
}

export default Component;
