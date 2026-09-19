import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9s_-2o4x.css';
import '../../css/t/t93u26bci.css';
import '../../css/d/denr8sb8q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j9s_-2o4x"/><path class="t93u26bci"/><path class="denr8sb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:label"} {...others} />);
}

export default Component;
