import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eor84ty_j.css';
import '../../css/k/kdv91vbho.css';
import '../../css/a/auo1ow_ga.css';
import '../../css/v/voi6sj_0n.css';
import '../../css/x/xr5pcxbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="eor84ty_j"/><rect class="kdv91vbho"/><rect class="auo1ow_ga"/><rect class="voi6sj_0n"/><path class="xr5pcxbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-items"} {...others} />);
}

export default Component;
