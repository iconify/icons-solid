import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avekk7_9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="avekk7_9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hdmi-port-fill"} {...others} />);
}

export default Component;
