import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7psxub_u.css';
import '../../css/h/h7jtw2b3w.css';
import '../../css/y/y3qh6bb5i.css';
import '../../css/y/ylnwrz31h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n7psxub_u"/><path class="h7jtw2b3w"/><path class="y3qh6bb5i"/><path class="ylnwrz31h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road-finish-duotone"} {...others} />);
}

export default Component;
