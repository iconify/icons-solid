import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u78xlvtog.css';
import '../../css/z/zdx4gpbfd.css';
import '../../css/u/up7_q2tzu.css';
import '../../css/t/tar4ktbfi.css';
import '../../css/e/ewt7nk-fj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u78xlvtog"/><path class="zdx4gpbfd"/><path class="up7_q2tzu"/><path class="tar4ktbfi"/><path class="ewt7nk-fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tv-broken"} {...others} />);
}

export default Component;
