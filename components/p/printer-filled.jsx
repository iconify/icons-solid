import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8owdqtsa.css';
import '../../css/w/wrt-x_0am.css';
import '../../css/d/dt3g_4q-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d8owdqtsa"/><circle class="wrt-x_0am"/><path class="dt3g_4q-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:printer-filled"} {...others} />);
}

export default Component;
