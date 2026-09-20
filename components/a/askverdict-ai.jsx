import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ph18ztb1l.css';
import '../../css/c/cy0lo1bgb.css';
import '../../css/s/s8555ub_w.css';
import '../../css/t/tgxxv4-ay.css';
import '../../css/c/cwnkpx8fh.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="cuyn6tgcc"><path class="ph18ztb1l"/><path class="cy0lo1bgb"/><path class="s8555ub_w"/><path class="tgxxv4-ay"/><path class="cwnkpx8fh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:askverdict-ai"} {...others} />);
}

export default Component;
