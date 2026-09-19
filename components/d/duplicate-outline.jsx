import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1lbyxb3k.css';
import '../../css/d/ddsbg3vby.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="x1lbyxb3k"/><path class="ddsbg3vby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:duplicate-outline"} {...others} />);
}

export default Component;
