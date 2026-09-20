import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdi64yb1u.css';

const viewBox = {"width":24,"height":24,"top":-4};
const content = `<path class="gdi64yb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:gamepad"} {...others} />);
}

export default Component;
