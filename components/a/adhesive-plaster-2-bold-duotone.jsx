import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cm6sg93kc.css';
import '../../css/u/uivb0ybws.css';
import '../../css/n/nmjfa5zhl.css';
import '../../css/z/zifbo-blw.css';
import '../../css/h/h42sto7hr.css';
import '../../css/p/p3uxicb7q.css';
import '../../css/r/ruo8o0bhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cm6sg93kc"/><path class="uivb0ybws"/><path class="nmjfa5zhl"/><path class="zifbo-blw"/><path class="h42sto7hr"/><path class="p3uxicb7q"/><path class="ruo8o0bhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-2-bold-duotone"} {...others} />);
}

export default Component;
