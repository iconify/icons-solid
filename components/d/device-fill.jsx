import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmi_x69kn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmi_x69kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:device-fill"} {...others} />);
}

export default Component;
