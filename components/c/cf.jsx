import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/siivzwuqv.css';
import '../../css/b/bc4gh5bbk.css';
import '../../css/d/dxzdn9trp.css';
import '../../css/i/irbw56b-d.css';
import '../../css/t/to49hwbas.css';
import '../../css/d/do-gfwb0o.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="siivzwuqv"/><path class="bc4gh5bbk"/><path class="dxzdn9trp"/><path class="irbw56b-d"/><path class="to49hwbas"/><path class="do-gfwb0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cf"} {...others} />);
}

export default Component;
