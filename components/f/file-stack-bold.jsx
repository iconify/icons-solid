import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/exuxe-b4e.css';
import '../../css/i/ic_cgwbjf.css';
import '../../css/r/rufx8lb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="exuxe-b4e"/><path class="ic_cgwbjf"/><path class="rufx8lb6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-stack-bold"} {...others} />);
}

export default Component;
