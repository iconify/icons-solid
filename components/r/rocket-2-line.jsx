import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfq1-iboq.css';
import '../../css/x/x0ws1hdqd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfq1-iboq"/><path class="x0ws1hdqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rocket-2-line"} {...others} />);
}

export default Component;
