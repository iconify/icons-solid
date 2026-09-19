import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub3z3pbln.css';
import '../../css/f/fe-h--bgr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ub3z3pbln"/><circle class="fe-h--bgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:save"} {...others} />);
}

export default Component;
