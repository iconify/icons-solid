import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t0bdzibjv.css';
import '../../css/f/fygz0y4og.css';
import '../../css/z/z2ah-61oe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t0bdzibjv"/><path class="fygz0y4og"/><path class="z2ah-61oe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shop-broken"} {...others} />);
}

export default Component;
