import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2tgebcxx.css';
import '../../css/b/bd3d8z14l.css';
import '../../css/g/gnu68mb9o.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="q2tgebcxx"/><path class="bd3d8z14l"/><path class="gnu68mb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:googlecolab"} {...others} />);
}

export default Component;
