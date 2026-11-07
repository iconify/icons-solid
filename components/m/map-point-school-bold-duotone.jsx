import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev04l0b7x.css';
import '../../css/l/l15q94brx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ev04l0b7x"/><path clip-rule="evenodd" class="l15q94brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-school-bold-duotone"} {...others} />);
}

export default Component;
