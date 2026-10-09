import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo1eldb9g.css';
import '../../css/s/s6o8xgbyi.css';
import '../../css/t/tcpd3kbos.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fo1eldb9g"/><path class="s6o8xgbyi"/><path class="tcpd3kbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:circuit-breaker-20"} {...others} />);
}

export default Component;
