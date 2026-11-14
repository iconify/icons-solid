import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oirotweno.css';
import '../../css/d/d9fwxhphv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oirotweno"/><path class="d9fwxhphv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pi-hole-dark"} {...others} />);
}

export default Component;
