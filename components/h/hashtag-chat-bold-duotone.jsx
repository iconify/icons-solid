import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xif453wco.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/k/kr91vbc_r.css';
import '../../css/m/m5v2b9dxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xif453wco"/><g class="xtpeb-edw"><path class="kr91vbc_r"/><path class="m5v2b9dxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-chat-bold-duotone"} {...others} />);
}

export default Component;
