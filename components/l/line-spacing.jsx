import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w99iq9bkj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w99iq9bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:line-spacing"} {...others} />);
}

export default Component;
