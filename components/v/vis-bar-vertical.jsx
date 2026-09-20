import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhrp6sb2b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qhrp6sb2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-bar-vertical"} {...others} />);
}

export default Component;
