import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqgea4myn.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="iqgea4myn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:watch-circle-heartbeat-monitor-1-remix"} {...others} />);
}

export default Component;
