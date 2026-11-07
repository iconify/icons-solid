import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oeqs3cbpz.css';
import '../../css/f/fvpx17bce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oeqs3cbpz"/><path class="fvpx17bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backspace-bold-duotone"} {...others} />);
}

export default Component;
