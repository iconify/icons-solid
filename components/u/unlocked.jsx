import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4t7nkb3h.css';
import '../../css/x/xuyrlebfz.css';
import '../../css/u/ugsg8xbov.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l4t7nkb3h"/><path class="xuyrlebfz"/><path class="ugsg8xbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:unlocked"} {...others} />);
}

export default Component;
