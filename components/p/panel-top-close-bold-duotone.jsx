import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j3ckz-_ie.css';
import '../../css/o/oy1ei0h3g.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="j3ckz-_ie"/><path class="oy1ei0h3g"/><path class="wf89k6buf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-top-close-bold-duotone"} {...others} />);
}

export default Component;
