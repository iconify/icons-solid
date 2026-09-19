import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_shbeese.css';
import '../../css/y/yn8tzubog.css';
import '../../css/g/g7i4sdbnm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q_shbeese"/><path class="yn8tzubog"/><path class="g7i4sdbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:shower"} {...others} />);
}

export default Component;
