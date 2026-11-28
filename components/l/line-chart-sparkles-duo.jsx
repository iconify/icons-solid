import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p7lniib-c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nhobn03np.css';
import '../../css/o/oc7p48bdb.css';
import '../../css/o/oi3kjkbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p7lniib-c secondary"/><g class="dt0cm9dhy primary"><path class="nhobn03np"/><path class="oc7p48bdb"/><path class="oi3kjkbsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:line-chart-sparkles-duo"} {...others} />);
}

export default Component;
