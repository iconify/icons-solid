import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6e5-ctfb.css';
import '../../css/i/i3rjp8brq.css';
import '../../css/o/o1g4_ci-r.css';
import '../../css/v/vzn707dmk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n6e5-ctfb"/><path class="i3rjp8brq"/><path clip-rule="evenodd" class="o1g4_ci-r"/><path class="vzn707dmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:garage-bold-duotone"} {...others} />);
}

export default Component;
