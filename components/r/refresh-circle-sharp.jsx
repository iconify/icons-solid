import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhug2eb4d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vhug2eb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:refresh-circle-sharp"} {...others} />);
}

export default Component;
