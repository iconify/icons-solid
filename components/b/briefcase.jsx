import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxnfp4_ov.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cxnfp4_ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:briefcase"} {...others} />);
}

export default Component;
