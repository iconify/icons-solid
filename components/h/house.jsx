import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txy313exu.css';
import '../../css/t/tvxuj9beq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="txy313exu"/><path class="tvxuj9beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:house"} {...others} />);
}

export default Component;
