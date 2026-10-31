import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/okuzz3tjw.css';
import '../../css/k/kkjdlbmqh.css';
import '../../css/o/owgnbuomu.css';
import '../../css/z/zc2m5bbql.css';
import '../../css/d/d4rt0lb-l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="okuzz3tjw"/><path class="kkjdlbmqh"/><path class="owgnbuomu wm-shine"/><path class="wm-k zc2m5bbql"/><path class="d4rt0lb-l wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:crosshair"} {...others} />);
}

export default Component;
