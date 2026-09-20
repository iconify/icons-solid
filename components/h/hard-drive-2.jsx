import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wri4y-b5f.css';
import '../../css/m/m-5k35bsm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="wri4y-b5f"/><path class="m-5k35bsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hard-drive-2"} {...others} />);
}

export default Component;
