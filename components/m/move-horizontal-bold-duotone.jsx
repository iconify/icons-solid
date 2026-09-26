import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjbho5b4r.css';
import '../../css/x/xv9fwsbfa.css';
import '../../css/l/ltey99hig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="yjbho5b4r"/><path class="xv9fwsbfa"/><path class="ltey99hig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-horizontal-bold-duotone"} {...others} />);
}

export default Component;
