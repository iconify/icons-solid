import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tganbebhi.css';
import '../../css/l/l6gdv6u4l.css';
import '../../css/o/oibplp75r.css';
import '../../css/g/g9_g5bfes.css';
import '../../css/u/uxh3gebzd.css';
import '../../css/q/q5gp961vc.css';
import '../../css/v/v-f-uuber.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tganbebhi"/><path class="l6gdv6u4l"/><path class="oibplp75r"/><path class="g9_g5bfes"/><path class="uxh3gebzd"/><path class="q5gp961vc"/><path class="v-f-uuber"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:hands-clapping-circle"} {...others} />);
}

export default Component;
