import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gya71ubxe.css';
import '../../css/z/zevo29beo.css';
import '../../css/f/f4gfhxbgm.css';
import '../../css/l/la3g5ysia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gya71ubxe"/><path class="zevo29beo"/><circle class="f4gfhxbgm"/><circle class="la3g5ysia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:coupon"} {...others} />);
}

export default Component;
