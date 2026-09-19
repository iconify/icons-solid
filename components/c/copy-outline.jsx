import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1lbyxb3k.css';
import '../../css/p/p-t5oux0e.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="x1lbyxb3k"/><path class="p-t5oux0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:copy-outline"} {...others} />);
}

export default Component;
