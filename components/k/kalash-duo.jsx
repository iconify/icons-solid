import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lwm_83b8r.css';
import '../../css/z/zvbckp13i.css';
import '../../css/o/oi-opqu9k.css';
import '../../css/t/tatv7kkeq.css';
import '../../css/y/ybu7qgplj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lwm_83b8r"/><path class="wm-a zvbckp13i"/><path class="oi-opqu9k"/><path class="tatv7kkeq"/><path class="wm-a ybu7qgplj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kalash-duo"} {...others} />);
}

export default Component;
