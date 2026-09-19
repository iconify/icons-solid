import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy7m0b3bx.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="uy7m0b3bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:b-i-dashboard"} {...others} />);
}

export default Component;
