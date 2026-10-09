import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn8qa1b6g.css';
import '../../css/q/qgrtu-b6i.css';
import '../../css/v/vzf5-cbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yn8qa1b6g"/><path class="qgrtu-b6i"/><path class="vzf5-cbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cave-48"} {...others} />);
}

export default Component;
