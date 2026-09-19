import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/j/jny-57qfz.css';
import '../../css/f/f7dt8db0j.css';
import '../../css/w/w94kgrhdl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="jny-57qfz"/><path class="f7dt8db0j"/><path class="w94kgrhdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:building-one"} {...others} />);
}

export default Component;
