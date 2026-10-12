import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0s11ybgw.css';
import '../../css/c/cdzz_zyre.css';
import '../../css/e/e591zr0hx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e0s11ybgw"/><path class="cdzz_zyre"/><path class="e591zr0hx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:airplane"} {...others} />);
}

export default Component;
