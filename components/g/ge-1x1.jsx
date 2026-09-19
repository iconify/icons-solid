import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erzf03bmv.css';
import '../../css/t/t7gwqghcs.css';
import '../../css/w/wq7u60b_p.css';
import '../../css/w/w7xf5tl0z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="erzf03bmv"/><path class="t7gwqghcs"/><path class="wq7u60b_p"/><path class="w7xf5tl0z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ge-1x1"} {...others} />);
}

export default Component;
