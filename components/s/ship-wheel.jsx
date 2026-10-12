import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqk_3vtin.css';
import '../../css/x/x03iax-2f.css';
import '../../css/d/dyn1kjb2c.css';
import '../../css/u/uhfote78q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="pqk_3vtin"/><circle class="x03iax-2f"/><circle class="dyn1kjb2c"/><path class="uhfote78q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ship-wheel"} {...others} />);
}

export default Component;
