import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdh1yrkty.css';
import '../../css/g/glhn3ynhb.css';
import '../../css/p/pqj3nccep.css';
import '../../css/l/lalof1vvp.css';
import '../../css/z/z5g6y2brp.css';
import '../../css/h/hi5fl2oqf.css';
import '../../css/n/n91xz3bds.css';
import '../../css/g/gcxdx3g_p.css';
import '../../css/g/gs596lbrd.css';
import '../../css/s/s9zwlwbbp.css';

const viewBox = {"width":220.61,"height":173.65};
const content = `<path class="sdh1yrkty"/><path class="glhn3ynhb"/><path class="pqj3nccep"/><path class="lalof1vvp"/><path class="z5g6y2brp"/><path class="hi5fl2oqf"/><path class="n91xz3bds"/><path class="gcxdx3g_p"/><path class="gs596lbrd"/><path class="s9zwlwbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:karmada-light"} {...others} />);
}

export default Component;
