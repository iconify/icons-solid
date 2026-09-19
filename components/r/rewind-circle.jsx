import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zzjencchc.css';
import '../../css/q/qagk1jfqk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="zzjencchc"/><path class="qagk1jfqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:rewind-circle"} {...others} />);
}

export default Component;
