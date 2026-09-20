import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zuuurlsid.css';
import '../../css/s/soj9kcc_o.css';
import '../../css/a/alb1oebrg.css';
import '../../css/i/is2hclbsn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="zuuurlsid"/><path class="soj9kcc_o"/><path class="alb1oebrg"/><path class="is2hclbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:burrito-fastfood"} {...others} />);
}

export default Component;
