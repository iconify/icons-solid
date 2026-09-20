import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfe806brr.css';
import '../../css/c/cngewyg-g.css';
import '../../css/e/ezlrtwd4b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qfe806brr"/><path class="cngewyg-g"/><path class="ezlrtwd4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mediamanager"} {...others} />);
}

export default Component;
