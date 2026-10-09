import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9f9bgb4v.css';
import '../../css/r/rtxnsrb6j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w9f9bgb4v"/><path class="rtxnsrb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-efficiency-48"} {...others} />);
}

export default Component;
