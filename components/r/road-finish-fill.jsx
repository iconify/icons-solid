import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n7psxub_u.css';
import '../../css/h/h7jtw2b3w.css';
import '../../css/d/dq2-7yb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n7psxub_u"/><path class="h7jtw2b3w"/><path class="dq2-7yb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road-finish-fill"} {...others} />);
}

export default Component;
