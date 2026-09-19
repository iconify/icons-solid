import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3l6og77c.css';
import '../../css/m/mx_vpj2hx.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="ft5dv1b6b"><path class="i3l6og77c"/><path class="mx_vpj2hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:minus"} {...others} />);
}

export default Component;
