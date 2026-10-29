import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gp2xu_0ce.css';
import '../../css/s/sr9rel-iy.css';
import '../../css/m/m3mkbybuz.css';
import '../../css/i/ish3pfb8j.css';
import '../../css/k/k2u4e7ozl.css';
import '../../css/a/adj_bacoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gp2xu_0ce wm-k"/><path class="sr9rel-iy wm-k"/><path class="m3mkbybuz wm-k"/><path class="ish3pfb8j wm-a"/><path class="k2u4e7ozl wm-a"/><path class="adj_bacoq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:receipt"} {...others} />);
}

export default Component;
