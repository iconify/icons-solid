import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh2rpybbw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mjiehcc6m.css';
import '../../css/v/vcowebo7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dh2rpybbw"/><g class="xtpeb-edw"><path class="mjiehcc6m"/><path class="vcowebo7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-round-bold-duotone"} {...others} />);
}

export default Component;
