import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j4sh7-bnd.css';
import '../../css/m/mmp_-hbpz.css';
import '../../css/h/hitghubfs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="j4sh7-bnd"/><path class="mmp_-hbpz"/><path class="hitghubfs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:firefighter"} {...others} />);
}

export default Component;
