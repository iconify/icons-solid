import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/a/a4l3r_b1b.css';
import '../../css/y/yixxjjb7a.css';
import '../../css/h/ho51x7b-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="a4l3r_b1b"/><path class="yixxjjb7a"/><path class="ho51x7b-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-sunny"} {...others} />);
}

export default Component;
