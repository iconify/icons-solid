import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-zna8aim.css';
import '../../css/q/qjyultakh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n-zna8aim"/><path class="qjyultakh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fusion-20"} {...others} />);
}

export default Component;
