import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_b4fs6ts.css';
import '../../css/n/n1lpkmy7b.css';
import '../../css/i/ineqx1pui.css';
import '../../css/q/qzmk87bpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.2 20.5)" class="r_b4fs6ts"/><rect transform="matrix(0 -1 -1 0 22.2 20.5)" class="n1lpkmy7b"/><path class="ineqx1pui"/><path class="qzmk87bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cashier"} {...others} />);
}

export default Component;
