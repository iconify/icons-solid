import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvo_itb6z.css';
import '../../css/s/sz1hmfb_l.css';
import '../../css/o/om4lpibwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vvo_itb6z"/><path class="sz1hmfb_l"/><path class="om4lpibwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bed-single-duotone"} {...others} />);
}

export default Component;
