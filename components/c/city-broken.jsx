import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k0rn6ub7o.css';
import '../../css/f/fh4wkkbpl.css';
import '../../css/x/xun1kzbst.css';
import '../../css/m/mazw48b6h.css';
import '../../css/i/iidlf9dhp.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/y/yz2tlliej.css';
import '../../css/c/c1vi8l2_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="k0rn6ub7o"/><path class="fh4wkkbpl"/><path class="xun1kzbst"/><path class="mazw48b6h"/><path class="iidlf9dhp"/><path class="xpzbxokqs"/><path class="yz2tlliej"/><path class="c1vi8l2_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:city-broken"} {...others} />);
}

export default Component;
