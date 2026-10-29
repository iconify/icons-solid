import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/ok2h6kb5u.css';
import '../../css/k/kctmd-b-w.css';
import '../../css/b/bvody_b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ok2h6kb5u"/><path class="kctmd-b-w wm-k"/><path class="bvody_b8k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cpu-sketch"} {...others} />);
}

export default Component;
