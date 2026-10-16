import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i6ezflbgv.css';
import '../../css/r/rx83a-b1v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i6ezflbgv"/><path class="rx83a-b1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ear-defenders-48"} {...others} />);
}

export default Component;
