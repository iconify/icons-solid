import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwuvbdcau.css';
import '../../css/y/yow8pow4g.css';
import '../../css/t/tgtgovnso.css';
import '../../css/b/b0mt28bvo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bwuvbdcau"/><path class="yow8pow4g"/><path class="tgtgovnso"/><path class="b0mt28bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cottage-20"} {...others} />);
}

export default Component;
