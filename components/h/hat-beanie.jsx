import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ae582acpv.css';
import '../../css/x/xe53owbmy.css';
import '../../css/k/kf9bnsb8d.css';
import '../../css/z/zgbwwhbkk.css';
import '../../css/e/e8uvoxbln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ae582acpv"/><circle class="xe53owbmy"/><path class="kf9bnsb8d"/><rect class="zgbwwhbkk"/><path class="e8uvoxbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hat-beanie"} {...others} />);
}

export default Component;
