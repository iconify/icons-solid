import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0knsgbev.css';
import '../../css/e/e9axqfb4f.css';
import '../../css/p/pdhn0vbsi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c0knsgbev"/><path class="e9axqfb4f"/><path class="pdhn0vbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tv2-play"} {...others} />);
}

export default Component;
