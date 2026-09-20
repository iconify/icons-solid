import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uuk9ddb3n.css';
import '../../css/t/tdjv_pboj.css';
import '../../css/q/qm_tzmbus.css';
import '../../css/q/q6dd6bdmz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uuk9ddb3n"/><path clip-rule="evenodd" class="tdjv_pboj"/><path class="qm_tzmbus"/><path clip-rule="evenodd" class="q6dd6bdmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:view-document-files-flat"} {...others} />);
}

export default Component;
