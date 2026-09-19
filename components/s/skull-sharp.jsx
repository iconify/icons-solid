import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wsh4tibvv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wsh4tibvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:skull-sharp"} {...others} />);
}

export default Component;
