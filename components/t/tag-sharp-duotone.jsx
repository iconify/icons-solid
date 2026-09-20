import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oj35wm7ta.css';
import '../../css/k/kjdy_6b8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="oj35wm7ta"/><path class="kjdy_6b8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:tag-sharp-duotone"} {...others} />);
}

export default Component;
