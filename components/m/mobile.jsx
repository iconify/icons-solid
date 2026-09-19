import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5tpnz--a.css';
import '../../css/q/qn50x0b6w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r5tpnz--a"/><path class="qn50x0b6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:mobile"} {...others} />);
}

export default Component;
