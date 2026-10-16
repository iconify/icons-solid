import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqoqidbfs.css';
import '../../css/o/oa5v05bkq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jqoqidbfs"/><path class="oa5v05bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-high-48"} {...others} />);
}

export default Component;
