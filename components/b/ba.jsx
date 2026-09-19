import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udh7_hb0a.css';
import '../../css/h/hxfwenb1h.css';
import '../../css/h/h4m20gb5o.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="udh7_hb0a"/><path class="hxfwenb1h"/><path class="h4m20gb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ba"} {...others} />);
}

export default Component;
