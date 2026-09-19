import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/g/g2dlk-oyv.css';
import '../../css/e/esm70_z4f.css';
import '../../css/h/hkfkufblm.css';
import '../../css/x/x_19xtp2u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="g2dlk-oyv"/><path class="esm70_z4f"/><path class="hkfkufblm"/><path class="x_19xtp2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:weary"} {...others} />);
}

export default Component;
