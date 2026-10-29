import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sebac8bfa.css';
import '../../css/p/pgjsmy3yc.css';
import '../../css/q/qfzblfw3y.css';
import '../../css/i/i_e0aq0rj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sebac8bfa"/><path class="pgjsmy3yc wm-a"/><path class="qfzblfw3y wm-k"/><path class="i_e0aq0rj wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:archive-restore-sketch"} {...others} />);
}

export default Component;
