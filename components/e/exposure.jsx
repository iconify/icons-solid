import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krm_rrbhp.css';
import '../../css/q/q1h9w_bpz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="krm_rrbhp"/><path class="q1h9w_bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:exposure"} {...others} />);
}

export default Component;
