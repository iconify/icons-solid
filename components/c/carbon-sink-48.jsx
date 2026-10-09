import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9wzu3thg.css';
import '../../css/l/ligxsu4bo.css';
import '../../css/e/ev0jxtbrs.css';
import '../../css/m/m574ul2mu.css';
import '../../css/i/i4g1ambsu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a9wzu3thg"/><path class="ligxsu4bo"/><path class="ev0jxtbrs"/><path class="m574ul2mu"/><path class="i4g1ambsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-sink-48"} {...others} />);
}

export default Component;
