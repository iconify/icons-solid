import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcpug3b7d.css';
import '../../css/o/oi41y_wwj.css';
import '../../css/r/rfmo84bve.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fcpug3b7d"/><path class="oi41y_wwj"/><path class="rfmo84bve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:chartdownwardstrend"} {...others} />);
}

export default Component;
