import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/heq7cyb0x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="heq7cyb0x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:exit-sharp"} {...others} />);
}

export default Component;
