import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5nefr4oy.css';
import '../../css/u/uyy-03b_b.css';
import '../../css/f/fxfgl_6kl.css';
import '../../css/v/vep2w7bwl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tt7vcqswa.css';
import '../../css/t/tzi-ertvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5nefr4oy"/><path class="uyy-03b_b"/><path class="fxfgl_6kl"/><path class="vep2w7bwl"/><g class="xtpeb-edw"><path class="tt7vcqswa"/><path class="tzi-ertvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-horizontal-bold-duotone"} {...others} />);
}

export default Component;
