import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue2-q7bvs.css';
import '../../css/k/ksp8umbhc.css';
import '../../css/s/s8tc8qojs.css';
import '../../css/c/caa41bcyj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ue2-q7bvs"/><path class="ksp8umbhc"/><path class="s8tc8qojs"/><path class="caa41bcyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:microphone-bold-duotone"} {...others} />);
}

export default Component;
