import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6q-f6bnh.css';
import '../../css/n/ny4ycobxt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r6q-f6bnh"/><path class="ny4ycobxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:happy"} {...others} />);
}

export default Component;
