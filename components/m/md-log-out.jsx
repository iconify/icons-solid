import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi-wnz67i.css';
import '../../css/e/eopo7lbmx.css';
import '../../css/p/p4xyc1bjj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vi-wnz67i"/><path class="eopo7lbmx"/><path class="p4xyc1bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-log-out"} {...others} />);
}

export default Component;
