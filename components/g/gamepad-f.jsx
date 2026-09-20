import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3bww6big.css';

const viewBox = {"width":24,"height":24,"top":-4};
const content = `<path class="y3bww6big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:gamepad-f"} {...others} />);
}

export default Component;
