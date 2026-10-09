import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtakimb5j.css';
import '../../css/q/qnyuvicip.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qtakimb5j"/><path class="qnyuvicip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-down-48-bold"} {...others} />);
}

export default Component;
