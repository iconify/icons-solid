import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c2u3_cb-h.css';
import '../../css/n/nx8145bpd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c2u3_cb-h"/><path class="nx8145bpd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calendar-week-filled"} {...others} />);
}

export default Component;
