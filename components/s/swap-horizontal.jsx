import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz3r-qb8r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rz3r-qb8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:swap-horizontal"} {...others} />);
}

export default Component;
