import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2nwjacxb.css';
import '../../css/n/n2-vjlbye.css';
import '../../css/k/kyuqe4bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e2nwjacxb wm-k"/><path class="n2-vjlbye wm-shine"/><path class="kyuqe4bdp wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:avatar-dog"} {...others} />);
}

export default Component;
