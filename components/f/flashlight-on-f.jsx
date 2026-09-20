import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr1n1y8wn.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-1};
const content = `<path class="vr1n1y8wn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:flashlight-on-f"} {...others} />);
}

export default Component;
