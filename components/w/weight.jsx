import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/velw-ed5r.css';
import '../../css/b/b83fj5brz.css';
import '../../css/l/lz_07f6az.css';
import '../../css/u/uxjcl4ryp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="velw-ed5r"/><path class="b83fj5brz"/><circle class="lz_07f6az"/><path class="uxjcl4ryp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:weight"} {...others} />);
}

export default Component;
