import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvbcrablp.css';
import '../../css/l/lwrg85til.css';
import '../../css/v/vcu04ebhz.css';
import '../../css/i/iysev6bne.css';
import '../../css/d/dxnrye12r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvbcrablp"/><path class="lwrg85til"/><path class="vcu04ebhz"/><path class="iysev6bne"/><path class="dxnrye12r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bot-bold-duotone"} {...others} />);
}

export default Component;
