import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j645jhbza.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gjdm3pbxq.css';
import '../../css/w/wryprvbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j645jhbza"/><g class="xtpeb-edw"><path class="gjdm3pbxq"/><path class="wryprvbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-full-screen-bold-duotone"} {...others} />);
}

export default Component;
