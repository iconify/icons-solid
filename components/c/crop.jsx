import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsf_xwbsm.css';
import '../../css/q/qp7v_obxe.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vsf_xwbsm"/><path class="qp7v_obxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:crop"} {...others} />);
}

export default Component;
