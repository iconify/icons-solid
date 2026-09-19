import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4nriqbly.css';
import '../../css/j/jfaet3x_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h4nriqbly"/><path class="jfaet3x_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chevrons-left"} {...others} />);
}

export default Component;
