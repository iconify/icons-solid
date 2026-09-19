import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d1nm7_b-m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d1nm7_b-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:justify-center"} {...others} />);
}

export default Component;
