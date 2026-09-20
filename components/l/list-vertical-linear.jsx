import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvnj3qbjd.css';
import '../../css/k/kh_4bzbdf.css';
import '../../css/o/o2bnwltsv.css';
import '../../css/r/r9gp_ab3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="fvnj3qbjd"/><path class="kh_4bzbdf"/><path class="o2bnwltsv"/><path class="r9gp_ab3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-vertical-linear"} {...others} />);
}

export default Component;
