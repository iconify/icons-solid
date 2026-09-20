import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dm2oz9bnr.css';
import '../../css/y/yv44zccgq.css';
import '../../css/t/t-og4eyuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dm2oz9bnr"/><path class="yv44zccgq"/><path class="t-og4eyuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skirt-broken"} {...others} />);
}

export default Component;
