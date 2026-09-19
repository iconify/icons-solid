import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzkr7cr_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rzkr7cr_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:wifi-signal-off"} {...others} />);
}

export default Component;
