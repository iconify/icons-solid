import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx8wwcc3r.css';
import '../../css/m/mb8xl_g2f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nx8wwcc3r"/><path class="mb8xl_g2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:chart-pie"} {...others} />);
}

export default Component;
