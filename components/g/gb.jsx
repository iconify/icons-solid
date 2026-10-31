import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wyvplj7xq.css';
import '../../css/c/c3tualr0p.css';
import '../../css/i/i_ea3q1-f.css';
import '../../css/n/n7g0rrbju.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="wyvplj7xq"/><path class="c3tualr0p"/><path class="i_ea3q1-f"/><path class="n7g0rrbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gb"} {...others} />);
}

export default Component;
