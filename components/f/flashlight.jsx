import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/g/g_nfofb7y.css';
import '../../css/z/zh3s4go3z.css';
import '../../css/e/e699-fbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="g_nfofb7y"/><path class="zh3s4go3z"/><path class="e699-fbdt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:flashlight"} {...others} />);
}

export default Component;
