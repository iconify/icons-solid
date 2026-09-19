import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pypo4hbot.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pypo4hbot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blacksmallsquare"} {...others} />);
}

export default Component;
