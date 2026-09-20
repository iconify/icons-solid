import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cl4yuccwl.css';
import '../../css/n/nq7gkdlse.css';
import '../../css/l/lsv0mdbrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cl4yuccwl"/><path class="nq7gkdlse"/><path class="lsv0mdbrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:code-scan-filled"} {...others} />);
}

export default Component;
