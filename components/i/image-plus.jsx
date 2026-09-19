import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q17t251rw.css';
import '../../css/y/yvf9cwdfi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q17t251rw"/><path class="yvf9cwdfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:image-plus"} {...others} />);
}

export default Component;
