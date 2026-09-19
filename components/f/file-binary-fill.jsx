import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu8ix6b3e.css';
import '../../css/j/jvgu8xbdp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="gu8ix6b3e"/><path class="jvgu8xbdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:file-binary-fill"} {...others} />);
}

export default Component;
