import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ehewotkqs.css';
import '../../css/h/hbv47lb9l.css';
import '../../css/f/fch9epbwt.css';
import '../../css/x/xfe_oobgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ehewotkqs"/><path class="hbv47lb9l"/><path class="fch9epbwt"/><path class="xfe_oobgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-broken"} {...others} />);
}

export default Component;
