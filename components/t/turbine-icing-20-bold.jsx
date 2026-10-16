import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx4fd5nos.css';
import '../../css/z/zama-11es.css';
import '../../css/y/yvy3k0pml.css';
import '../../css/f/fcme7kbbb.css';
import '../../css/m/me5xyh10x.css';
import '../../css/d/dxxr4jbcl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xx4fd5nos"/><path class="zama-11es"/><path class="yvy3k0pml"/><path class="fcme7kbbb"/><path class="me5xyh10x"/><path class="dxxr4jbcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turbine-icing-20-bold"} {...others} />);
}

export default Component;
