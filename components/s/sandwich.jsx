import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rfamvro4r.css';
import '../../css/q/qe9vmvbor.css';
import '../../css/v/v9r399hyu.css';
import '../../css/w/w1vn-jecy.css';
import '../../css/e/e4m2_se9b.css';
import '../../css/x/xev4p-u1t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rfamvro4r wm-shadow"/><path class="qe9vmvbor wm-shadow"/><path class="v9r399hyu"/><path class="w1vn-jecy"/><path class="e4m2_se9b"/><path class="xev4p-u1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sandwich"} {...others} />);
}

export default Component;
