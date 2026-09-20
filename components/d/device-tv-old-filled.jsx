import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xuvr5tbwc.css';
import '../../css/z/zre65-bad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="xuvr5tbwc"/><path class="zre65-bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tv-old-filled"} {...others} />);
}

export default Component;
