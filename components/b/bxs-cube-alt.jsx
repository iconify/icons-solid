import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es20id4tl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="es20id4tl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-cube-alt"} {...others} />);
}

export default Component;
