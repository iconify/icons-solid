import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/khhypgwbg.css';
import '../../css/j/ju2bde_7s.css';
import '../../css/l/lc5mm78aw.css';
import '../../css/j/jt0mlr5bg.css';
import '../../css/w/w9lc49y0d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="khhypgwbg"/><path class="ju2bde_7s"/><path class="lc5mm78aw"/><path class="jt0mlr5bg"/><path class="w9lc49y0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-2-broken"} {...others} />);
}

export default Component;
