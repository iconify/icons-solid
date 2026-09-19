import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m_aow478j.css';
import '../../css/t/tesqwp_1z.css';
import '../../css/v/v-og-bc-f.css';
import '../../css/f/fnwanvbri.css';
import '../../css/c/c5vggl7lh.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m_aow478j"/><path class="tesqwp_1z"/><path class="v-og-bc-f"/><path class="fnwanvbri"/><path class="c5vggl7lh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:sexual-reproductive-health"} {...others} />);
}

export default Component;
