import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ti58_q58v.css';
import '../../css/p/p0_5i-mlc.css';
import '../../css/z/z_g8vgb8m.css';
import '../../css/r/rbrvvbc4m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ti58_q58v"/><path class="p0_5i-mlc"/><path class="z_g8vgb8m"/><path class="rbrvvbc4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:satellite-dish"} {...others} />);
}

export default Component;
