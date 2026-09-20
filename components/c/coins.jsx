import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8c9xvb5c.css';
import '../../css/j/j-we4za-r.css';
import '../../css/s/sno-j09lk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o8c9xvb5c"/><path class="j-we4za-r"/><path class="sno-j09lk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:coins"} {...others} />);
}

export default Component;
