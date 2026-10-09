import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smjtv-oxv.css';
import '../../css/y/yixl0qbmg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="smjtv-oxv"/><path class="yixl0qbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:presentation-48"} {...others} />);
}

export default Component;
