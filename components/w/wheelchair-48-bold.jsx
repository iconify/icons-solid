import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5f0qtb6n.css';
import '../../css/y/yji6vpglu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w5f0qtb6n"/><path class="yji6vpglu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelchair-48-bold"} {...others} />);
}

export default Component;
