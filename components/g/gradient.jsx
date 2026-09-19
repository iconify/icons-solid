import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx-_r7b2v.css';
import '../../css/v/vam_rybkj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tx-_r7b2v"/><path class="vam_rybkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:gradient"} {...others} />);
}

export default Component;
