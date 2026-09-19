import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj_f8hdiy.css';
import '../../css/x/x7_q-qb_c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hj_f8hdiy"/><path class="x7_q-qb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ansible-wordmark"} {...others} />);
}

export default Component;
