import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xbh61tv4d.css';
import '../../css/i/il-481xop.css';
import '../../css/d/dupz0rjux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xbh61tv4d"/><path class="il-481xop"/><path class="dupz0rjux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-rain-filled"} {...others} />);
}

export default Component;
