import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtuynmb0p.css';
import '../../css/g/ggq26fb1j.css';
import '../../css/i/i79gkzbce.css';
import '../../css/r/rk9p1tbyk.css';
import '../../css/s/scb2aub2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtuynmb0p"/><path class="ggq26fb1j"/><circle class="i79gkzbce"/><path class="rk9p1tbyk"/><path class="scb2aub2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:sanitizer"} {...others} />);
}

export default Component;
