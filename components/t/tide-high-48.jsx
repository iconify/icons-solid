import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9xbwubme.css';
import '../../css/r/rjepksb1q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j9xbwubme"/><path class="rjepksb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tide-high-48"} {...others} />);
}

export default Component;
