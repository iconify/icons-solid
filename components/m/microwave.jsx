import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezwyqg7nw.css';
import '../../css/r/rxavi7byl.css';
import '../../css/b/b5q7t25-k.css';
import '../../css/j/j3gmevzde.css';
import '../../css/h/hmtmzcbru.css';
import '../../css/r/rre-yibiq.css';
import '../../css/p/p7wv4hzwt.css';
import '../../css/y/ykrojebsn.css';
import '../../css/p/prahisi_g.css';
import '../../css/s/sdlub461m.css';
import '../../css/q/qbhyi-0xr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ezwyqg7nw wm-shadow"/><path class="rxavi7byl wm-k"/><path class="b5q7t25-k wm-k"/><path class="j3gmevzde wm-k"/><path class="hmtmzcbru wm-k"/><path class="rre-yibiq wm-k"/><path class="p7wv4hzwt wm-shine"/><path class="wm-k ykrojebsn"/><path class="prahisi_g wm-k"/><path class="sdlub461m wm-k"/><path class="qbhyi-0xr wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:microwave"} {...others} />);
}

export default Component;
