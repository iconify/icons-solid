import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-53a9b9m.css';
import '../../css/v/v4pibzalj.css';
import '../../css/g/g-v39cl0x.css';
import '../../css/l/ll10r739d.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="f-53a9b9m"/><path class="v4pibzalj"/><path class="g-v39cl0x"/><path class="ll10r739d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:duplicate"} {...others} />);
}

export default Component;
