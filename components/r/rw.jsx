import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ouvbs_qcz.css';
import '../../css/h/h1us9dbtu.css';
import '../../css/n/n5naw-ivc.css';
import '../../css/l/ly9_pbc3z.css';
import '../../css/j/j2qcdz78j.css';
import '../../css/r/ratmzacos.css';
import '../../css/n/n-4kryf6r.css';
import '../../css/h/hog4iybhd.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="ouvbs_qcz"/><path class="h1us9dbtu"/><path class="n5naw-ivc"/><path class="ly9_pbc3z"/><path class="j2qcdz78j"/><path class="ratmzacos"/><path class="n-4kryf6r"/><circle class="hog4iybhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:rw"} {...others} />);
}

export default Component;
