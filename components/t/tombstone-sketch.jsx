import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fkib5fbzb.css';
import '../../css/n/nplj_bcal.css';
import '../../css/s/sajyvl67j.css';
import '../../css/l/lg35ukd_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fkib5fbzb"/><path class="nplj_bcal wm-k"/><path class="sajyvl67j wm-k"/><path class="lg35ukd_q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tombstone-sketch"} {...others} />);
}

export default Component;
