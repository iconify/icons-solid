import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6vm1lw4k.css';
import '../../css/w/w-a0529lf.css';
import '../../css/v/vfdh2_b_f.css';
import '../../css/o/o0lqhvmmi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z6vm1lw4k"/><path class="w-a0529lf"/><path class="vfdh2_b_f"/><circle class="o0lqhvmmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:man-outline"} {...others} />);
}

export default Component;
