import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mlpd71upt.css';
import '../../css/u/uc-l12bvo.css';
import '../../css/s/s-eh6tbeb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="mlpd71upt"/><path class="uc-l12bvo"/><path class="s-eh6tbeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pacifier"} {...others} />);
}

export default Component;
