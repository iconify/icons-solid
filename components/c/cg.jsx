import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spo03jb3p.css';
import '../../css/q/qa54txbpk.css';
import '../../css/z/z-jc08m3r.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="spo03jb3p"/><path class="qa54txbpk"/><path class="z-jc08m3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cg"} {...others} />);
}

export default Component;
