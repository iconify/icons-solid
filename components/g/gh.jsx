import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klzfnpbwd.css';
import '../../css/p/pariyhblm.css';
import '../../css/b/bw-gev08g.css';
import '../../css/e/etrreifsd.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="klzfnpbwd"/><path class="pariyhblm"/><path class="bw-gev08g"/><path class="etrreifsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gh"} {...others} />);
}

export default Component;
