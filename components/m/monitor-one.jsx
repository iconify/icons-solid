import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bg88480tj.css';
import '../../css/n/nsc_jbcdm.css';
import '../../css/a/aaaenz9-y.css';
import '../../css/t/tv-6m_b4b.css';
import '../../css/w/wcqq8obof.css';
import '../../css/w/wydb97zhq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bg88480tj"/><path class="nsc_jbcdm"/><path class="aaaenz9-y"/><path class="tv-6m_b4b"/><circle class="wcqq8obof"/><path class="wydb97zhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:monitor-one"} {...others} />);
}

export default Component;
