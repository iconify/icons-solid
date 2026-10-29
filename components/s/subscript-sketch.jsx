import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ngc7rqivy.css';
import '../../css/t/t8a6dybzk.css';
import '../../css/m/mk4038byc.css';
import '../../css/c/c9ke8ubkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ngc7rqivy wm-k"/><path class="t8a6dybzk wm-a"/><path class="mk4038byc wm-k"/><path class="c9ke8ubkk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:subscript-sketch"} {...others} />);
}

export default Component;
