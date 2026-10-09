import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/utf77lbef.css';
import '../../css/w/wqvq98bbm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="utf77lbef"/><path class="wqvq98bbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-line-48"} {...others} />);
}

export default Component;
