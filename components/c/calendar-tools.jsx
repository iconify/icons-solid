import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfsv8v-qt.css';
import '../../css/t/teb2t72mt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yfsv8v-qt"/><path class="teb2t72mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:calendar-tools"} {...others} />);
}

export default Component;
