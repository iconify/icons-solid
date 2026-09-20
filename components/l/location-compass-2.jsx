import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/w/wzw7k-iny.css';
import '../../css/r/rzijpmhtj.css';
import '../../css/t/t12t99bda.css';
import '../../css/p/p1igpubza.css';
import '../../css/h/h13-w3m0n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="wzw7k-iny"/><path class="rzijpmhtj"/><path class="t12t99bda"/><path class="p1igpubza"/><path class="h13-w3m0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:location-compass-2"} {...others} />);
}

export default Component;
