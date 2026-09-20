import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d9i9dccvt.css';
import '../../css/q/q3kvdplzd.css';
import '../../css/i/iwi_9woln.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="d9i9dccvt"/><path class="q3kvdplzd"/><path class="iwi_9woln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:stethoscope"} {...others} />);
}

export default Component;
