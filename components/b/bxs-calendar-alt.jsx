import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_vsx4b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_vsx4b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-calendar-alt"} {...others} />);
}

export default Component;
