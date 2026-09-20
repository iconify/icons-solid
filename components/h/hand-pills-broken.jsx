import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4s1krj7f.css';
import '../../css/o/ob35u0bzq.css';
import '../../css/r/r_s45d2gs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="l4s1krj7f"/><path class="ob35u0bzq"/><path class="r_s45d2gs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-pills-broken"} {...others} />);
}

export default Component;
