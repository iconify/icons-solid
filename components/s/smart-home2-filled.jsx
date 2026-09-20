import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ov-7mhb7f.css';
import '../../css/s/sc1y-lb6c.css';
import '../../css/h/h3tsf1b3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ov-7mhb7f"/><path class="sc1y-lb6c"/><path class="h3tsf1b3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:smart-home2-filled"} {...others} />);
}

export default Component;
