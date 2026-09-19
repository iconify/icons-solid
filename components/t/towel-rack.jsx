import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cel3xzbip.css';
import '../../css/l/lk1vu0bqa.css';
import '../../css/r/rnh6u-77o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cel3xzbip"/><path class="lk1vu0bqa"/><path class="rnh6u-77o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:towel-rack"} {...others} />);
}

export default Component;
