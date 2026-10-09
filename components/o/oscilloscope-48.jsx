import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuvdc2bma.css';
import '../../css/w/ww4ol3fvu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yuvdc2bma"/><path class="ww4ol3fvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oscilloscope-48"} {...others} />);
}

export default Component;
