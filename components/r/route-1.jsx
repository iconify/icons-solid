import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsy148som.css';
import '../../css/f/fg4g6tbff.css';
import '../../css/d/d7c0xbofg.css';
import '../../css/z/zjo456biz.css';
import '../../css/o/ou9-8bc_i.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="hsy148som"/><path clip-rule="evenodd" class="fg4g6tbff"/><path class="d7c0xbofg"/><path clip-rule="evenodd" class="zjo456biz"/><path class="ou9-8bc_i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:route-1"} {...others} />);
}

export default Component;
