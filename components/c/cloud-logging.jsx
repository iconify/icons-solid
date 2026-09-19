import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjow93aqa.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/u/u4aiujbly.css';
import '../../css/c/cjvz156we.css';
import '../../css/i/iicfjbcrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fjow93aqa"/><path class="i7sr6ubzr"/><path class="u4aiujbly"/><path class="cjvz156we"/><path class="iicfjbcrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-logging"} {...others} />);
}

export default Component;
