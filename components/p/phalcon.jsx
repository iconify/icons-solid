import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkpplc3oo.css';
import '../../css/m/mbgl0xb_o.css';
import '../../css/e/eg0azubuo.css';
import '../../css/k/kz_b-it7y.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pkpplc3oo"/><path class="mbgl0xb_o"/><path class="eg0azubuo"/><path class="kz_b-it7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:phalcon"} {...others} />);
}

export default Component;
