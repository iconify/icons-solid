import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w5etd2brv.css';
import '../../css/h/hu9roob1e.css';
import '../../css/l/loveje7ha.css';
import '../../css/y/ymutoxbwl.css';
import '../../css/j/jox3706ps.css';
import '../../css/p/puev8ccwe.css';
import '../../css/z/zn-kg8b8y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w5etd2brv"/><path class="hu9roob1e"/><path class="loveje7ha"/><path class="ymutoxbwl"/><path class="jox3706ps"/><path class="puev8ccwe"/><path class="zn-kg8b8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:snow"} {...others} />);
}

export default Component;
