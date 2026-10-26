import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofr0qbbgx.css';
import '../../css/v/vuj78ebsz.css';
import '../../css/q/qldlfbb-n.css';
import '../../css/e/eb00tkyfb.css';
import '../../css/y/yj5xdrbpu.css';
import '../../css/l/leim8pvvb.css';
import '../../css/n/nd1cofbsi.css';

const viewBox = {"width":792,"height":792};
const content = `<path class="ofr0qbbgx"/><path class="vuj78ebsz"/><path class="qldlfbb-n"/><path class="eb00tkyfb"/><path class="yj5xdrbpu"/><path class="leim8pvvb"/><path class="nd1cofbsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:cert-manager"} {...others} />);
}

export default Component;
