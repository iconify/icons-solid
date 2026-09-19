import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtu812bby.css';
import '../../css/z/z1lk1-i3x.css';
import '../../css/f/f9p8yfbou.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="mtu812bby"/><path class="z1lk1-i3x"/><path class="f9p8yfbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-white-hair"} {...others} />);
}

export default Component;
