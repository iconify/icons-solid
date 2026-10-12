import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bn00yob0d.css';
import '../../css/q/q6ly_lxbl.css';
import '../../css/k/kjn39o4qu.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/l/lwquj8bck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bn00yob0d"/><path class="q6ly_lxbl"/><rect class="kjn39o4qu"/><path class="tr8xe4bes"/><path class="lwquj8bck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image-off"} {...others} />);
}

export default Component;
