import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lqm6vl25b.css';
import '../../css/e/e2a5o8qra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="lqm6vl25b"/><path class="e2a5o8qra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bottle-sharp-fill"} {...others} />);
}

export default Component;
