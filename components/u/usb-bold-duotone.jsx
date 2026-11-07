import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8nv6abtp.css';
import '../../css/i/ixmpqp39v.css';
import '../../css/i/ie9sgdcup.css';
import '../../css/l/ln2o8ibpz.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/b/b8-b71v1z.css';
import '../../css/a/av6fj_bnx.css';
import '../../css/a/a8jywxz4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8nv6abtp"/><path class="ixmpqp39v"/><path class="ie9sgdcup"/><path class="ln2o8ibpz"/><g class="xtpeb-edw"><path class="b8-b71v1z"/><path class="av6fj_bnx"/><path class="a8jywxz4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:usb-bold-duotone"} {...others} />);
}

export default Component;
