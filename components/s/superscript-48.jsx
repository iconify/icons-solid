import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goq34d2ro.css';
import '../../css/j/jqlujo0tq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="goq34d2ro"/><path class="jqlujo0tq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:superscript-48"} {...others} />);
}

export default Component;
