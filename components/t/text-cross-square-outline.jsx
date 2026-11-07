import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1bvnqfvt.css';
import '../../css/m/m4styj0nb.css';
import '../../css/m/mz1do-bvr.css';
import '../../css/t/t5k-_f5ou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1bvnqfvt"/><path class="m4styj0nb"/><path class="mz1do-bvr"/><path clip-rule="evenodd" class="t5k-_f5ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-cross-square-outline"} {...others} />);
}

export default Component;
