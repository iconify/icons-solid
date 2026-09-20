import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gk68ef7cr.css';
import '../../css/i/igvy8zbiq.css';
import '../../css/l/ltt51rbav.css';
import '../../css/z/zswg6_xex.css';
import '../../css/m/maqhmbbxl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gk68ef7cr"/><path class="igvy8zbiq"/><path class="ltt51rbav"/><path class="zswg6_xex"/><path class="maqhmbbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:laptop-camera"} {...others} />);
}

export default Component;
