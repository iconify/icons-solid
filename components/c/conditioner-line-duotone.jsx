import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mm_litbye.css';
import '../../css/l/l68gd2b_u.css';
import '../../css/u/utklsfbvf.css';
import '../../css/p/piipinbcz.css';
import '../../css/k/kkehyzd5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mm_litbye"/><path class="l68gd2b_u"/><path class="utklsfbvf"/><path class="piipinbcz"/><path class="kkehyzd5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-line-duotone"} {...others} />);
}

export default Component;
