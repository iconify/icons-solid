import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fu10s8xbg.css';
import '../../css/l/lnj0vzkpp.css';
import '../../css/e/e8x7bixqn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fu10s8xbg"/><path class="lnj0vzkpp"/><path class="e8x7bixqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flashlight-48"} {...others} />);
}

export default Component;
