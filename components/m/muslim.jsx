import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-u0n-b_r.css';
import '../../css/b/b9je1lbtq.css';
import '../../css/v/vifoorb8h.css';
import '../../css/y/y0fkbccbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x-u0n-b_r"/><path class="b9je1lbtq"/><path class="vifoorb8h"/><path class="y0fkbccbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:muslim"} {...others} />);
}

export default Component;
