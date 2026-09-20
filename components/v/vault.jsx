import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n1tta3b2f.css';
import '../../css/e/eruig_ygc.css';
import '../../css/k/kmfuvw0ir.css';
import '../../css/i/iu3w7gbln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="n1tta3b2f"/><path class="eruig_ygc"/><circle class="kmfuvw0ir"/><path class="iu3w7gbln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:vault"} {...others} />);
}

export default Component;
