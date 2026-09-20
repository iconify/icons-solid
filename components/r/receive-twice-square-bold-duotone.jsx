import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/s/sfwevqhbk.css';
import '../../css/l/l88ucufld.css';
import '../../css/k/k6uzzitsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="sfwevqhbk"/><path class="l88ucufld"/><path class="k6uzzitsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:receive-twice-square-bold-duotone"} {...others} />);
}

export default Component;
