import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_mmmi5cu.css';
import '../../css/f/f-7xlbb5g.css';
import '../../css/q/qphgw4bpl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l_mmmi5cu"/><path class="f-7xlbb5g"/><path class="qphgw4bpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earthing-switch-20"} {...others} />);
}

export default Component;
