import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9c978stu.css';
import '../../css/v/v2alfkblc.css';
import '../../css/j/jidmrvb8i.css';
import '../../css/s/stajzpbbw.css';
import '../../css/m/m0m9w9bkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p9c978stu"/><path class="v2alfkblc"/><path class="jidmrvb8i"/><path class="stajzpbbw"/><path class="m0m9w9bkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:motorbike-duotone"} {...others} />);
}

export default Component;
