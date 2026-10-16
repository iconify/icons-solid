import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctvev1biw.css';
import '../../css/q/qis7irbip.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ctvev1biw"/><path class="qis7irbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:money-bag-48-bold"} {...others} />);
}

export default Component;
