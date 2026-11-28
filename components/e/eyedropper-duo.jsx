import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpsncfb9w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ssn2did6s.css';
import '../../css/p/p70x4lbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary tpsncfb9w"/><g class="dt0cm9dhy primary"><path class="ssn2did6s"/><path class="p70x4lbvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:eyedropper-duo"} {...others} />);
}

export default Component;
