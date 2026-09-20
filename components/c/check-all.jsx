import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt7t7e0ll.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mt7t7e0ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:check-all"} {...others} />);
}

export default Component;
