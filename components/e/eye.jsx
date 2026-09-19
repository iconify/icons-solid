import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nykq9ej_e.css';
import '../../css/d/dccl6cslv.css';
import '../../css/o/ov6a3cc_j.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="nykq9ej_e"/><path class="dccl6cslv"/><path class="ov6a3cc_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:eye"} {...others} />);
}

export default Component;
