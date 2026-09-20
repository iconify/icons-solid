import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkq7-hbwz.css';
import '../../css/h/h8ttso15c.css';
import '../../css/g/gczwk7b2i.css';
import '../../css/q/qan60rbsg.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="jkq7-hbwz"/><path class="h8ttso15c"/><circle class="gczwk7b2i"/><path class="qan60rbsg"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-greenland"} {...others} />);
}

export default Component;
