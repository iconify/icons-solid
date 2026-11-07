import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc-90zu7e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xhtmzff9z.css';
import '../../css/v/v2j-f2pit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mc-90zu7e"/><g class="xtpeb-edw"><path class="xhtmzff9z"/><path class="v2j-f2pit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sledgehammer-bold-duotone"} {...others} />);
}

export default Component;
