import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_vsitbjn.css';
import '../../css/c/c_2_mxnve.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o_vsitbjn"/><path class="c_2_mxnve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:volume-high"} {...others} />);
}

export default Component;
