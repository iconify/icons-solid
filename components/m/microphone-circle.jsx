import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwngmwbgs.css';
import '../../css/i/ihfh6lbaa.css';
import '../../css/f/f3gu8ac7c.css';
import '../../css/a/aa--g5dfu.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hwngmwbgs"/><path class="ihfh6lbaa"/><path class="f3gu8ac7c"/><path class="aa--g5dfu"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:microphone-circle"} {...others} />);
}

export default Component;
