import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ydswo8azc.css';
import '../../css/w/wayu11b8e.css';
import '../../css/a/aklo28mdk.css';
import '../../css/j/jk4j7fbyj.css';
import '../../css/c/cxn5qvxel.css';
import '../../css/k/kq78xsruv.css';
import '../../css/n/n48_bibvt.css';
import '../../css/e/e-nmbhdcd.css';
import '../../css/g/gxlsabcfs.css';
import '../../css/k/kdd6je4my.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ydswo8azc"/><path class="wayu11b8e"/><path class="aklo28mdk"/><path class="jk4j7fbyj"/><path class="cxn5qvxel"/><path class="kq78xsruv"/><path class="n48_bibvt"/><path class="e-nmbhdcd"/><path class="gxlsabcfs"/><path class="kdd6je4my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shopping-cart-full"} {...others} />);
}

export default Component;
