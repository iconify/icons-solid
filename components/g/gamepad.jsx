import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jcoduql6c.css';
import '../../css/r/rdd3p3upc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jcoduql6c"/><path class="rdd3p3upc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:gamepad"} {...others} />);
}

export default Component;
