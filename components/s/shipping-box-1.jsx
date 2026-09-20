import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mh390w7cp.css';
import '../../css/h/h63uk2lci.css';
import '../../css/t/t714vtbku.css';
import '../../css/s/sj71gtfbi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mh390w7cp"/><path clip-rule="evenodd" class="h63uk2lci"/><path class="t714vtbku"/><path class="sj71gtfbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shipping-box-1"} {...others} />);
}

export default Component;
