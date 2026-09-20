import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht_1znvpm.css';
import '../../css/p/prerz-7qh.css';
import '../../css/i/ik5ffsmmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ht_1znvpm"/><path class="prerz-7qh"/><path class="ik5ffsmmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:calendar-plus"} {...others} />);
}

export default Component;
