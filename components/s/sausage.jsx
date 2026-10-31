import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vb4g91bhl.css';
import '../../css/z/z2z_iactg.css';
import '../../css/d/df5r14bpg.css';
import '../../css/y/y4mtfplia.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vb4g91bhl"/><path class="z2z_iactg"/><path class="df5r14bpg"/><path class="y4mtfplia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:sausage"} {...others} />);
}

export default Component;
