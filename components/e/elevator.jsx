import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bp4xchyxl.css';
import '../../css/y/yx24jabbz.css';
import '../../css/p/pwo544lim.css';
import '../../css/k/kszctgiks.css';
import '../../css/z/z_6jgwbpi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bp4xchyxl"/><path class="yx24jabbz"/><path class="pwo544lim"/><path class="kszctgiks"/><path class="z_6jgwbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:elevator"} {...others} />);
}

export default Component;
