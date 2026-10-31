import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q11bnobfu.css';
import '../../css/l/lec51cbbz.css';
import '../../css/i/ipk8v9b_s.css';
import '../../css/c/cq97wwbdy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q11bnobfu"/><path class="lec51cbbz"/><path class="ipk8v9b_s"/><path class="cq97wwbdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:banana"} {...others} />);
}

export default Component;
