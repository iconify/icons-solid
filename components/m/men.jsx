import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nukrxlptl.css';
import '../../css/k/k3z3r9fjz.css';
import '../../css/c/cbatx6b9w.css';
import '../../css/b/bmsc_bces.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="nukrxlptl"/><path class="k3z3r9fjz"/><circle class="cbatx6b9w"/><path class="bmsc_bces"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:men"} {...others} />);
}

export default Component;
