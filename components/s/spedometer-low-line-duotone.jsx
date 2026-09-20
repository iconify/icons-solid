import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gshkn9qqt.css';
import '../../css/u/ud0vn3b7v.css';
import '../../css/t/thq5dxb7d.css';
import '../../css/w/wvjt8gthe.css';
import '../../css/f/frg8avblm.css';
import '../../css/w/wurlbwzqw.css';
import '../../css/m/mm4sswb_u.css';
import '../../css/g/gqr5orb3s.css';
import '../../css/c/ckxs0qo7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gshkn9qqt"/><path class="ud0vn3b7v"/><path class="thq5dxb7d"/><path class="wvjt8gthe"/><path class="frg8avblm"/><path class="wurlbwzqw"/><path class="mm4sswb_u"/><path class="gqr5orb3s"/><path class="ckxs0qo7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:spedometer-low-line-duotone"} {...others} />);
}

export default Component;
