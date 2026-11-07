import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgqttfboe.css';
import '../../css/f/f5dbbcraw.css';
import '../../css/s/s0v93zb7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pgqttfboe"/><path class="f5dbbcraw"/><path clip-rule="evenodd" class="s0v93zb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-2-bold"} {...others} />);
}

export default Component;
