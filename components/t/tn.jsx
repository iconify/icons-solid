import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tl6s61bvu.css';
import '../../css/u/ube40h2rt.css';
import '../../css/h/h6nciubjn.css';
import '../../css/j/j6m5kjbje.css';
import '../../css/n/nk2afbb1t.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="tl6s61bvu"/><circle class="ube40h2rt"/><circle class="h6nciubjn"/><circle class="j6m5kjbje"/><path class="nk2afbb1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tn"} {...others} />);
}

export default Component;
