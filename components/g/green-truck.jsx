import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pdp5dobft.css';
import '../../css/m/m9oyuabbp.css';
import '../../css/w/wr6g3jo2n.css';
import '../../css/y/yu4vwwb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pdp5dobft"/><path class="m9oyuabbp"/><path class="wr6g3jo2n"/><path class="yu4vwwb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:green-truck"} {...others} />);
}

export default Component;
