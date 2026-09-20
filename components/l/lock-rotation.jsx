import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co1npnfqd.css';
import '../../css/q/qzgw7kbnn.css';
import '../../css/o/oct1nbijs.css';
import '../../css/o/o3kpvxbzf.css';
import '../../css/d/dmors1zgq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="co1npnfqd"/><path class="qzgw7kbnn"/><path class="oct1nbijs"/><path class="o3kpvxbzf"/><path class="dmors1zgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:lock-rotation"} {...others} />);
}

export default Component;
