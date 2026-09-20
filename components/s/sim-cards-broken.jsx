import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hyhh_hbgv.css';
import '../../css/s/sszxh7b9e.css';
import '../../css/o/o431y0bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hyhh_hbgv"/><path class="sszxh7b9e"/><path class="o431y0bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-cards-broken"} {...others} />);
}

export default Component;
