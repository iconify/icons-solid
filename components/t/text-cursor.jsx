import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oe-98mb0w.css';
import '../../css/m/m5ytp9bms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="oe-98mb0w"/><path class="m5ytp9bms wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:text-cursor"} {...others} />);
}

export default Component;
