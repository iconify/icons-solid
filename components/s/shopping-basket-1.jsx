import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lse_kqbin.css';
import '../../css/u/uz92wn55v.css';
import '../../css/t/tf-jbaccj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lse_kqbin"/><path class="uz92wn55v"/><path class="tf-jbaccj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shopping-basket-1"} {...others} />);
}

export default Component;
