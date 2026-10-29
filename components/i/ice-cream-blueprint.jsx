import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z832h1bns.css';
import '../../css/g/gwy3bbbxn.css';
import '../../css/x/xzjbldrua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z832h1bns"/><path class="gwy3bbbxn wm-k"/><path class="wm-a xzjbldrua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ice-cream-blueprint"} {...others} />);
}

export default Component;
