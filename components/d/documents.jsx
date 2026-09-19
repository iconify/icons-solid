import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_pzyr42v.css';
import '../../css/f/f5mkxw1-g.css';
import '../../css/q/qqj91ccql.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_pzyr42v"/><path class="f5mkxw1-g"/><path class="qqj91ccql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:documents"} {...others} />);
}

export default Component;
