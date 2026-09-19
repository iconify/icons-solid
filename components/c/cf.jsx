import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/siivzwuqv.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/d/dxzdn9trp.css';
import '../../css/p/pmgtmlbzm.css';
import '../../css/n/n67jqub0e.css';
import '../../css/t/tnsowpb9p.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="siivzwuqv"/><path class="vsxun6bmm"/><path class="dxzdn9trp"/><path class="pmgtmlbzm"/><path class="n67jqub0e"/><path class="tnsowpb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:cf"} {...others} />);
}

export default Component;
