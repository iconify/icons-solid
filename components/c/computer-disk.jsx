import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmwo1wb_o.css';
import '../../css/v/v06mojknu.css';
import '../../css/b/bm3n72bpq.css';
import '../../css/r/rzorjbbxd.css';
import '../../css/m/mfs816jce.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wmwo1wb_o"/><path class="v06mojknu"/><path class="bm3n72bpq"/><path class="rzorjbbxd"/><path class="mfs816jce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:computer-disk"} {...others} />);
}

export default Component;
