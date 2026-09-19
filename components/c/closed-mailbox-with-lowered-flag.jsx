import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/st_eo561y.css';
import '../../css/k/ke2f-rpoo.css';
import '../../css/b/b9wl2xisy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="st_eo561y"/><path class="ke2f-rpoo"/><path class="b9wl2xisy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:closed-mailbox-with-lowered-flag"} {...others} />);
}

export default Component;
