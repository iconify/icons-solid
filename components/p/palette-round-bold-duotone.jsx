import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2sctea4w.css';
import '../../css/r/rq3rqabwk.css';
import '../../css/d/dpn1kvboj.css';
import '../../css/f/f_bnsfbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h2sctea4w"/><path class="rq3rqabwk"/><path class="dpn1kvboj"/><path class="f_bnsfbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-round-bold-duotone"} {...others} />);
}

export default Component;
