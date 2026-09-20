import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9_g5nb_c.css';
import '../../css/k/ks_z9sb4i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="r9_g5nb_c"/><path class="ks_z9sb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shield-2"} {...others} />);
}

export default Component;
