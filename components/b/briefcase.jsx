import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/omctlvrzx.css';
import '../../css/v/vs1nct1ln.css';
import '../../css/x/xfbnucutj.css';
import '../../css/k/kmn_ztb-h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="omctlvrzx"/><path class="vs1nct1ln"/><path class="xfbnucutj"/><path class="kmn_ztb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:briefcase"} {...others} />);
}

export default Component;
