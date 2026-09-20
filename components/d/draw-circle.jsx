import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6t9uc-4i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q6t9uc-4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:draw-circle"} {...others} />);
}

export default Component;
