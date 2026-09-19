import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7fxwoh6a.css';
import '../../css/d/dh7dtzbik.css';
import '../../css/p/prwipib7r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="k7fxwoh6a"/><path class="dh7dtzbik"/><path class="prwipib7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:inbox-tray"} {...others} />);
}

export default Component;
