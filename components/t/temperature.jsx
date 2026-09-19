import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8aqxbbrl.css';
import '../../css/q/q-w374b1g.css';
import '../../css/j/juykxi29h.css';
import '../../css/v/vxtp-z-ls.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h8aqxbbrl"/><path class="q-w374b1g"/><path clip-rule="evenodd" class="juykxi29h"/><rect class="vxtp-z-ls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:temperature"} {...others} />);
}

export default Component;
