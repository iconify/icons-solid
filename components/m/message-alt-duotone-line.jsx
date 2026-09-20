import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr4c9lt1j.css';
import '../../css/l/lp5zebcnh.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="rr4c9lt1j"/><path class="lp5zebcnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:message-alt-duotone-line"} {...others} />);
}

export default Component;
