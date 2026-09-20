import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utb9dqwgn.css';
import '../../css/m/mq3padcvo.css';
import '../../css/g/gpfk4wrwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="utb9dqwgn"/><path class="mq3padcvo"/><path class="gpfk4wrwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vlxpad"} {...others} />);
}

export default Component;
