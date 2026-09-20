import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/she6l78jo.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="she6l78jo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:watch-circle-heartbeat-monitor-2-solid"} {...others} />);
}

export default Component;
