import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y8zaxp_tc.css';
import '../../css/g/grz7v2bip.css';
import '../../css/w/w94kgrhdl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="y8zaxp_tc"/><path clip-rule="evenodd" class="grz7v2bip"/><path class="w94kgrhdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:building-two"} {...others} />);
}

export default Component;
