import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g-xwnsrlt.css';
import '../../css/r/rqx6b27ni.css';
import '../../css/m/msccn7b6y.css';
import '../../css/k/kswlmacai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g-xwnsrlt wm-a"/><path class="rqx6b27ni wm-k"/><path class="msccn7b6y wm-a"/><path class="kswlmacai wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:settings-2-sketch"} {...others} />);
}

export default Component;
