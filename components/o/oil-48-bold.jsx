import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpu4n9bbu.css';
import '../../css/r/r5moseb1w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jpu4n9bbu"/><path class="r5moseb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-48-bold"} {...others} />);
}

export default Component;
