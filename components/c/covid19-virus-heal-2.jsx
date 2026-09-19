import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yylgmr2nv.css';
import '../../css/y/yvj11htlz.css';
import '../../css/g/glhzmfa1d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yylgmr2nv"/><path class="yvj11htlz"/><path class="glhzmfa1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:covid19-virus-heal-2"} {...others} />);
}

export default Component;
