import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvr0gmblg.css';
import '../../css/o/od6unwbqx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xvr0gmblg"/><path class="od6unwbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:keyboard"} {...others} />);
}

export default Component;
