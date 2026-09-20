import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl55q5bty.css';
import '../../css/l/lr1-z_9gb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yl55q5bty"/><path class="lr1-z_9gb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pinterest"} {...others} />);
}

export default Component;
