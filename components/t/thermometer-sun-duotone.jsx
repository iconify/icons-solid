import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmfhugg_x.css';
import '../../css/m/m6mj_obaa.css';
import '../../css/f/fn8tddcxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hmfhugg_x"/><path class="m6mj_obaa"/><path class="fn8tddcxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:thermometer-sun-duotone"} {...others} />);
}

export default Component;
