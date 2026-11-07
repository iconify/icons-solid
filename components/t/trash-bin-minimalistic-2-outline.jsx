import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loc47zw8p.css';
import '../../css/f/fib6k6-vs.css';
import '../../css/q/q37ppubrn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loc47zw8p"/><path class="fib6k6-vs"/><path class="q37ppubrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trash-bin-minimalistic-2-outline"} {...others} />);
}

export default Component;
