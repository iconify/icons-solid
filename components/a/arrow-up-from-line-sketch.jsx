import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dcs14gb4n.css';
import '../../css/i/idfvs04zd.css';
import '../../css/i/izsxrmtpy.css';
import '../../css/k/k5_ti6n7q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dcs14gb4n wm-k"/><path class="idfvs04zd wm-a"/><path class="izsxrmtpy wm-k"/><path class="k5_ti6n7q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-from-line-sketch"} {...others} />);
}

export default Component;
