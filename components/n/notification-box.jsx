import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btvf5cc8x.css';
import '../../css/x/xe11pgb_q.css';
import '../../css/a/amrxilbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="btvf5cc8x"/><path class="xe11pgb_q"/><circle transform="rotate(90 18.14 5.83)" class="amrxilbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:notification-box"} {...others} />);
}

export default Component;
