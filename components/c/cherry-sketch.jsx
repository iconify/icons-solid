import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g5dvq_klh.css';
import '../../css/p/p68pgcbjk.css';
import '../../css/l/lzad66der.css';
import '../../css/s/sc6ko9v-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g5dvq_klh"/><path class="p68pgcbjk wm-a"/><path class="lzad66der wm-k"/><path class="sc6ko9v-k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cherry-sketch"} {...others} />);
}

export default Component;
