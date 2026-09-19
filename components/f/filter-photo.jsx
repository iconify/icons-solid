import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4sk93ouz.css';
import '../../css/z/zqq79db7w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r4sk93ouz"/><path class="zqq79db7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:filter-photo"} {...others} />);
}

export default Component;
