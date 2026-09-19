import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/klwxksbur.css';
import '../../css/p/pa_rqzygz.css';
import '../../css/a/au0y91bpr.css';
import '../../css/n/nsu45-bwk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="klwxksbur"/><path class="pa_rqzygz"/><path class="au0y91bpr"/><path transform="matrix(1.47345 0 0 1.55542 -73.182 -243.814)" class="nsu45-bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:bevyengine-wordmark"} {...others} />);
}

export default Component;
