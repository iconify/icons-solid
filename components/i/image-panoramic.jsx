import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xe7s5t0-f.css';
import '../../css/l/l3d6xihwu.css';
import '../../css/x/xtosehpxk.css';
import '../../css/y/y5_xywj9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xe7s5t0-f"/><path class="l3d6xihwu"/><path class="xtosehpxk"/><path class="y5_xywj9v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-panoramic"} {...others} />);
}

export default Component;
