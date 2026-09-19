import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjp_koc1i.css';
import '../../css/l/l6yehs63f.css';
import '../../css/g/ghhg-0_2c.css';
import '../../css/u/uj_9lubin.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sjp_koc1i"/><path class="l6yehs63f"/><circle class="ghhg-0_2c"/><path class="uj_9lubin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lollipop"} {...others} />);
}

export default Component;
