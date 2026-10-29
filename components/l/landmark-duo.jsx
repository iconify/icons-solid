import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nd4r1gbgv.css';
import '../../css/a/ar0r6f66r.css';
import '../../css/m/mpixi68ce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nd4r1gbgv"/><path class="ar0r6f66r wm-a"/><path class="mpixi68ce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:landmark-duo"} {...others} />);
}

export default Component;
