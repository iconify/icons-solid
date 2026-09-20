import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl16l82px.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pl16l82px"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:watch-circle-heartbeat-monitor-2-remix"} {...others} />);
}

export default Component;
