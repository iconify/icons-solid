import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dek9bkq9j.css';
import '../../css/f/fsclr0dbg.css';
import '../../css/h/hsyg8kbzj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dek9bkq9j"/><path clip-rule="evenodd" class="fsclr0dbg"/><path class="hsyg8kbzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:passport-bold-duotone"} {...others} />);
}

export default Component;
