import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g44gcmbhf.css';
import '../../css/x/xvo9-2b5e.css';
import '../../css/b/b18ml9b7e.css';
import '../../css/x/xyc0cgvgu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g44gcmbhf"/><path class="xvo9-2b5e"/><path class="b18ml9b7e"/><path class="xyc0cgvgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-2-outline"} {...others} />);
}

export default Component;
