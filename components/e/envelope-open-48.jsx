import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6va0ihvr.css';
import '../../css/y/y_9con1lw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r6va0ihvr"/><path class="y_9con1lw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:envelope-open-48"} {...others} />);
}

export default Component;
