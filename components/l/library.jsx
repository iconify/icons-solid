import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyrw6m2dw.css';
import '../../css/b/bki8pglrr.css';
import '../../css/e/e0by4cc5n.css';
import '../../css/o/o24oajbgy.css';
import '../../css/i/izn8_1b3b.css';
import '../../css/u/uu6uj1cub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xyrw6m2dw"/><rect transform="rotate(-15 12.92 4.5)" class="bki8pglrr"/><rect class="e0by4cc5n"/><rect class="o24oajbgy"/><rect transform="rotate(-15 12.92 4.5)" class="izn8_1b3b"/><path class="uu6uj1cub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:library"} {...others} />);
}

export default Component;
