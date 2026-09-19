import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnz88h8pe.css';
import '../../css/v/vs_irilvr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pnz88h8pe"/><path class="vs_irilvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:rocket-outline"} {...others} />);
}

export default Component;
