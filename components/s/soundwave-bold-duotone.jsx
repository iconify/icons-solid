import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbsq1h93u.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/g/gg3lrpbex.css';
import '../../css/u/uo4fesb6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sbsq1h93u"/><g class="xtpeb-edw"><path class="gg3lrpbex"/><path class="uo4fesb6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:soundwave-bold-duotone"} {...others} />);
}

export default Component;
