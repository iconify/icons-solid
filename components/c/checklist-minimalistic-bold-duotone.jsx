import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/p/p911rmthn.css';
import '../../css/g/gaaok0mkb.css';
import '../../css/w/wnxwnsdgl.css';
import '../../css/s/sxi8uuh3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="p911rmthn"/><path class="gaaok0mkb"/><path class="wnxwnsdgl"/><path class="sxi8uuh3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:checklist-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
