import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wgd6nob9p.css';
import '../../css/y/yxozyjbzj.css';
import '../../css/p/ptt2qbbym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="wgd6nob9p"/><path class="yxozyjbzj"/></g><path class="ptt2qbbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-2-bold-duotone"} {...others} />);
}

export default Component;
