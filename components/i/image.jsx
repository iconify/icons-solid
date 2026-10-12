import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euiqvmblv.css';
import '../../css/k/kjn39o4qu.css';
import '../../css/t/tr8xe4bes.css';
import '../../css/k/k1488cb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="euiqvmblv"/><rect class="kjn39o4qu"/><path class="tr8xe4bes"/><path class="k1488cb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:image"} {...others} />);
}

export default Component;
