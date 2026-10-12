import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbk4vsmtj.css';
import '../../css/w/ww_xydb2s.css';
import '../../css/e/ejdsdgbzd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qbk4vsmtj"/><path class="ww_xydb2s"/><path class="ejdsdgbzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drum-48"} {...others} />);
}

export default Component;
