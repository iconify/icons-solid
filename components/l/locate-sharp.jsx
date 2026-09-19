import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3c6jabxb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l3c6jabxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:locate-sharp"} {...others} />);
}

export default Component;
