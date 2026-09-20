import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vybz_3bof.css';
import '../../css/o/ot01b1b2v.css';
import '../../css/w/wwq9pacsb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vybz_3bof"/><path class="ot01b1b2v"/><circle class="wwq9pacsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:food-steak-cook-grill-steak-bbq-cooking-nutrition-barbecue-grilling-food"} {...others} />);
}

export default Component;
