import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5w600x0k.css';
import '../../css/w/wz8ezaczc.css';
import '../../css/k/kvpzeiuru.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="a5w600x0k"/><circle class="wz8ezaczc"/><circle class="kvpzeiuru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:ellipsis-horizontal-outline"} {...others} />);
}

export default Component;
