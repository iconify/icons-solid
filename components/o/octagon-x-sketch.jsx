import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rlqc2tblo.css';
import '../../css/b/b50d454iu.css';
import '../../css/y/ykharcboa.css';
import '../../css/l/lp5-t8f8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rlqc2tblo"/><path class="b50d454iu wm-a"/><path class="wm-k ykharcboa"/><path class="lp5-t8f8t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:octagon-x-sketch"} {...others} />);
}

export default Component;
