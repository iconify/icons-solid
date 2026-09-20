import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofc-ngbjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofc-ngbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:heartbeat-fill"} {...others} />);
}

export default Component;
