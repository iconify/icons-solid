import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hz-xe6i0l.css';
import '../../css/y/y1h8n_bsf.css';
import '../../css/i/io3lw19mq.css';
import '../../css/l/ln-2rbx0r.css';
import '../../css/t/tkd8ieuzm.css';
import '../../css/p/ps0dhs4kn.css';
import '../../css/e/enhw1db6z.css';
import '../../css/d/d7cjlwbxs.css';
import '../../css/x/x2in0sb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hz-xe6i0l"/><path class="y1h8n_bsf"/><path clip-rule="evenodd" class="io3lw19mq"/><path class="ln-2rbx0r"/><path class="tkd8ieuzm"/><path class="ps0dhs4kn"/><path class="enhw1db6z"/><path class="d7cjlwbxs"/><path class="x2in0sb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-play-horizontal-bold"} {...others} />);
}

export default Component;
